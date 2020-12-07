import styles from './style.module.css';
import { useCallback, useEffect, useRef, useMemo, useState } from 'preact/hooks';
import useInterval from '../../hooks/useInterval'
import useEventListener from '../../hooks/useEventListener'

// const POSITION = {x: 0, y: 0}
// const troops = ['🐎', '🐘', '🗡️', '🛡️', '🏹', '☄️']

export default function Kings() {
    const board = useRef(null)

    const delay = 1500
    const [dimension, setDimension] = useState(8)
    const REACH = [-dimension, -1, 1, dimension]
	const [troops, setTroops] = useState(Array(100).fill(0));
    const [forts, setForts] = useState([0])
    const [muster, setMuster] = useState([null, null]) // [index, total]
    const [fortified, fortify] = useState([]) // list of fortified ids
    // const [dragState, setDragState] = useState({
    //     isDragging: false,
    //     origin: POSITION,
    //     translation: POSITION
    // })
    const handleDiff = e => {
        if(e.target.value) {
            setDimension(Number(e.target.value))
        }
    }
    const detectEdge = (musterId, adjId, dimension) => {
        return (
            (adjId%dimension === 0 && (musterId+1)%dimension === 0) ||
            ((adjId+1)%dimension === 0 && musterId%dimension === 0)
        )
    }
    const deployTroops = (e, id) => {
        // setDragState(state => ({
        //     isDragging: true,
        //     origin: {x: clientX, y: clientY}
        // }))
        console.log({id, fortified, troops})
        if(typeof id === 'number' && typeof muster[0] === 'number') {
            console.log('edge', detectEdge(muster[0], id, dimension))
            if(id === muster[0] || detectEdge(muster[0], id, dimension)) return
            let dif = muster[0] - id
            // console.log(dif)
            if(!REACH.includes(dif)) return 
            setTroops(prev => prev.map((total, idx) => {
                if(idx === muster[0]) return total - muster[1]
                else if(idx === id) return muster[1] + total
                else return total
            }))
            setMuster([null, null])
        }
    }
    const musterTroops = (e, id) => {
        e.preventDefault()
        console.log('musterId', id)
        if(fortified.includes(id)) {
            console.log(`You can't muster fortified troops`)
        } else if(typeof id === 'number' && troops[id] > 0) {
            setMuster([id, troops[id]])
        }
    }
    const musterDeploy = (id) => {
        if(muster[0] === null) return ''
        if(muster[0] === id) return styles.muster
        if(REACH.reduce((acc, cur) => {
            if(detectEdge(muster[0], id, dimension)) return acc
            return [...acc, muster[0] + cur]
        }, []).includes(id)) return styles.deployable
        return ''
    }
    const fortifyTroops = (e, id) => {
        if(fortified.includes(id)) {
            fortify(fortified.filter(i => id !== i))
        } else {
            fortify([...fortified, id])
        }
        console.log({fortified})
    }
    useEffect(() => {
        document.documentElement.style.setProperty("--grid-columns", dimension)
        document.documentElement.style.setProperty("--grid-lines", dimension)
        setTroops(Array(dimension**2).fill(0))
    }, [dimension])

    useInterval(() => {
        setTroops(state => {
            return state.map((total, id) => {
                if(total < 0) return total
                if(forts.includes(id) && total < 50) return total + 1
                if(forts.includes(id) && total >= 75) return total - Math.floor(Math.random() * 1.05)
                if(total <= 50 && fortified.includes(id)) return total
                return total - Math.floor(Math.random() * 1.5)
            })
        })
    }, delay)
    
    const panScreen = useCallback(({clientX, clientY}) => {
        // console.log(clientX, clientY)
        if(clientX ===  0) {
            // console.log(board.current.style.transform)
            // console.log(board.current.style.transform.match(/\d/))
            if(!board.current.style.transform) {
                board.current.style.transform = 'translateX(1px)'
            }
            let newPos = board.current.style.transform.replace(/\d/, str => {
                // console.log(str)
                // console.log(`translateX(${str ? Number(str) + 1 : 1 }px)`)
              return `translateX(${str ? Number(str) + 1 : 1 }px)`
            })
            board.current.style.transform = newPos
        }
        if(clientX >= window.innerWidth) {
            // console.log(window.screenY, board.current)
        }
        if(clientY === 0) {
            // console.log(board.current.style.transform.match(/\d/))
            let newPos = board.current.style.transform.replace(/\d/, str => `translateY(${Number(str) + 1}px)`)
            board.current.style.setPropertyValue('transform', newPos)
        }
        if(clientX >= window.innerHeight) {
            // console.log(window.screenY, board.current)
        }
    })
    useEventListener('mousemove', panScreen)

    // Drag Event Handlers
    // const cursor = useMemo(() => ({
    //     cursor: dragState.isDragging ? 'e-resize' : 'grab',
    // }), [dragState.isDragging, dragState.translation])
    // const handleMouseMove = useCallback(({clientX, clientY}) => {
    //     const translation = {
    //         x: clientX - dragState.origin.x,
    //         y: clientY - dragState.origin.y
    //     }
    //     setDragState(state => ({
    //         ...state,
    //         translation
    //     }))
    // }, [dragState.origin])
    // const handleMouseUp = useCallback(() => {
    //     setDragState(state => ({
    //         ...state,
    //         isDragging: false
    //     }))
    // }, [])
    // useEffect(() => {
    //     if(dragState.isDragging) {
    //         window.addEventListener('mousemove', handleMouseMove)
    //         window.addEventListener('mouseup', handleMouseUp)
    //     } else {
    //         window.removeEventListener('mousemove', handleMouseMove)
    //         window.removeEventListener('mouseup', handleMouseUp)
    //     }
    //     setDragState(state => ({...dragState, translation: POSITION}))
    // }, [dragState.isDragging, handleMouseMove, handleMouseUp])

	return (
		<>
			<section class={styles.kings}>
				<h1>Kings</h1>
				<p>A strategy game</p>
                <p>Choose difficulty: 
                    <label for="easy" onClick={handleDiff}> Easy
                        <input type="radio" id="easy" name="difficulty" value="8" checked />
                    </label>
                    <label for="medium" onClick={handleDiff}> Medium
                        <input type="radio" id="medium" name="difficulty" value="12" />
                    </label>
                    <label for="hard" onClick={handleDiff}> Hard
                        <input type="radio" id="hard" name="difficulty" value="20" />
                    </label>
                </p>
                <div ref={board}>
                    <section class={styles.grid} onContextMenu={e => e.preventDefault()}>
                        {troops.map((total, id) => ( 
                                <div class={`${styles.cell} ${forts.includes(id) ? styles.king : ''} ${musterDeploy(id)}`} 
                                onClick={e => deployTroops(e, id)}>
                                    {total > 0 ? 
                                    <div class={`${styles.troop}`}
                                    onContextMenu={e => musterTroops(e, id)}
                                    onDblClick={e => fortifyTroops(e, id)}>
                                        <span>{total}</span>
                                        <span class={fortified.includes(id) ? styles.shield : styles.dagger}>{fortified.includes(id) ? '🛡️' : '🗡️'}</span>           
                                    </div> : null }
                                </div> 
                            ))
                        }
                    </section>
                </div>
			</section>
		</>
	);
}
