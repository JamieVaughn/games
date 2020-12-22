import {useEffect, useRef, useState} from 'preact/hooks'
import { draw } from './draw'
import Modal from '../../components/modal'

import style from './style.module.css'

// https://thibaut.io/react-canvas-components
// https://www.redblobgames.com/grids/hexagons/
// https://konvajs.org/docs/react/index.html

const HEIGHT = 500
const WIDTH = 500

export default function Canvas() {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState('#0000ff')
  const [stamping, setStamping] = useState(false)
  const [drawHistory, setDrawHistory] = useState([])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(JSON.parse(localStorage.getItem('palette')) || [])

  function handleSave(e) {
    setSaving(true)
  }
  function handleLoad(fileName) {
    handleClear()
    let loaded = saved.find(s => s.name === fileName)
    console.log(loaded)

    setDrawHistory(loaded.drawHistory)
    loaded.drawHistory.forEach(fn => fn === 'break' ? null : run(fn))
  }
  function handleDelete(e, name) {
      setSaved(saved.filter(s => s.name !== name))
      console.log(name, saved)
      e.stopPropagation()
  }
  function writeLocalStorage(fileName) {
    setSaving(false)
    if(fileName.length === 0) return
    setSaved(state => [
            ...state,
            {name: fileName, drawHistory: drawHistory}
        ]
    )
  }
  function handleColor(e) {
      console.log(e.target)
      setColor(e.target.value)
  }
  function handleClear() {
      draw.square(context, 0, 0, HEIGHT, 'white')
      setDrawHistory([])
  }
  function run(fn) {
      return draw[fn.type](context, ...fn.args)
  }
  function handleUndo () {
    const index = drawHistory.lastIndexOf('break') 
    console.log(index, drawHistory, drawHistory.slice(0, index))
    setDrawHistory(state => {
        let undid = index === -1 ? [] : state.slice(0, index)
        handleClear()
        undid.forEach(fn => fn === 'break' ? null : run(fn))
        return undid
    })
    
  }
  const handleStamp = () => {
      setStamping(state => !state)
  }
  let start = {x: 0, y: 0}
  let end = {x: 0, y: 0}
  // Canvas Painting UI and drawing 
  useEffect(() => {
    let mouseDown = false
    
    let canvasOffset = {
        left: canvasRef.current.getBoundingClientRect().left, 
        top: canvasRef.current.getBoundingClientRect().top
    }
    function handleMouseDown(e) {
        setDrawHistory(state => [...state, 'break'])
        start = {x: e.clientX - canvasOffset.left, y: e.clientY - canvasOffset.top}
        end = {x: e.clientX - canvasOffset.left, y: e.clientY - canvasOffset.top}
        if(stamping) {
            draw.stamp(context, start, color)
            setDrawHistory(state => [...state, {type: 'stamp', args: [{x: e.clientX - canvasOffset.left, y: e.clientY - canvasOffset.top}, color]}])
            return
        }
        mouseDown = true
    }
    function handleMouseUp(e) {
        mouseDown = false
    }
    function handleMouseMove(e, nd) {
        if(mouseDown && context) {
            start = {x: nd.x, y: nd.y}
            end = {x: e.clientX - canvasOffset.left, y: e.clientY - canvasOffset.top}
            //Draw Path
            draw.path(context, start, end, color)
            setDrawHistory(state => [...state, {type: 'path', args: [{x: nd.x, y: nd.y}, {x: e.clientX - canvasOffset.left, y: e.clientY - canvasOffset.top}, color]}])
        }
    }

    if(canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d')
        if(ctx) setContext(ctx)
    }
    if(context) {
        canvasRef.current.addEventListener('mousedown', handleMouseDown)
        canvasRef.current.addEventListener('mouseup', handleMouseUp)
        canvasRef.current.addEventListener('mouseout', handleMouseUp)
        canvasRef.current.addEventListener('mousemove', e => handleMouseMove(e, end))

        // context.fillRect(5, 5, 100, 100)
        // draw.circle(context, 440, 60, 50, 'crimson')
    } 

    return () => {
        if(canvasRef.current) {
            canvasRef.current.removeEventListener('mousedown', handleMouseDown)
            canvasRef.current.removeEventListener('mouseup', handleMouseUp)
            canvasRef.current.removeEventListener('mouseout', handleMouseUp)
            canvasRef.current.removeEventListener('mousemove', handleMouseMove)
        }
    }

  }, [context, color, stamping, saved]);

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem('palette', JSON.stringify(saved))
  }, [saved])

  return (
    <div onContextMenu={() => console.log(drawHistory)}
    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'center'}}>
      {saving ? <Modal msg={'Save as...'} emitter={writeLocalStorage}/> : '' }
      <canvas
        id="canvas"
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        style={{
          border: '2px solid #000',
          margin: '10px auto',
        }}
      ></canvas>
      <ul class={style.saveList}>
          Saved Drawings:
          {saved.map(s => <li onClick={() => handleLoad(s.name)}>{s.name} <span onClick={(e) => handleDelete(e, s.name)}>╳</span></li>)}
      </ul>
      <div class={style.controls} style={{maxWidth: WIDTH}}>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleStamp}>{stamping ? 'Stop Stamping' : 'Start Stamping'}</button>
          <label for='palette'>Choose Color: &#x200B;
            <input id="palette" type="color" value={color} onChange={handleColor} />
          </label>
      </div>
    </div>
  );
}