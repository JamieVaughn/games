import styles from './style.module.css';
import { useCallback, useEffect, useRef, useMemo, useState } from 'preact/hooks';
import useEventListener from '../../hooks/useEventListener'

import World from './world'
import {units} from './pieces'
import Tooltip from '../../components/tooltip'


// const POSITION = {x: 0, y: 0}

export default function Kings() {
    const [dimension, setDimension] = useState(8)
    const [state, setState] = useState({
        delay: 1000,
        positionOne: 0,
        positionTwo: dimension**2 - 1,
        matrix: Array(dimension**2).fill(0).map(() => ({type: 'c', total: 0, player: 1}))
    })
    // const [dragState, setDragState] = useState({
    //     isDragging: false,
    //     origin: POSITION,
    //     translation: POSITION
    // })
    // setDragState(state => ({
        //     isDragging: true,
        //     origin: {x: clientX, y: clientY}
        // }))
    const handleDifficulty = e => {
        if(e.target.value) {
            setDimension( Number(e.target.value))
        }
    }
    const handleStart = e => {
        e.preventDefault()
        console.log(e)
    }
    
    useEffect(() => {
        document.documentElement.style.setProperty("--grid-columns", String(dimension))
        document.documentElement.style.setProperty("--grid-lines", String(dimension))
    }, [dimension])
    
    // const panScreen = useCallback(({clientX, clientY}) => {
    //     // console.log(clientX, clientY)
    //     if(clientX ===  0) {
    //         // console.log(board.current.style.transform)
    //         // console.log(board.current.style.transform.match(/\d/))
    //         if(!board.current.style.transform) {
    //             board.current.style.transform = 'translateX(1px)'
    //         }
    //         let newPos = board.current.style.transform.replace(/\d/, str => {
    //             // console.log(str)
    //             // console.log(`translateX(${str ? Number(str) + 1 : 1 }px)`)
    //           return `translateX(${str ? Number(str) + 1 : 1 }px)`
    //         })
    //         board.current.style.transform = newPos
    //     }
    //     if(clientX >= window.innerWidth) {
    //         // console.log(window.screenY, board.current)
    //     }
    //     if(clientY === 0) {
    //         // console.log(board.current.style.transform.match(/\d/))
    //         let newPos = board.current.style.transform.replace(/\d/, str => `translateY(${Number(str) + 1}px)`)
    //         board.current.style.setPropertyValue('transform', newPos)
    //     }
    //     if(clientX >= window.innerHeight) {
    //         // console.log(window.screenY, board.current)
    //     }
    // })
    // useEventListener('mousemove', panScreen)

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
    const useList = unit => {
        return [
            `Attack: ${unit.attack}`,
            `Defense: ${unit.defense}`,
            `Speed: ${unit.speed}`,
            `Range: ${unit.range ?? 1}`,
            `Unit Cap: ${unit.cap}`,
            ' --- ',
            `Abilities: `,
            unit.abilities.join(', ')
        ].filter(i => !!i)
    }
	return (
		<>
			<section class={styles.kings}>
				<h1 class={styles.title}>King's Corvée</h1>
                <form class={styles.settings}>Choose difficulty: 
                    <label for="easy" onClick={handleDifficulty}> Easy
                        <input type="radio" id="easy" name="difficulty" value="8" checked />
                    </label>
                    <label for="medium" onClick={handleDifficulty}> Medium
                        <input type="radio" id="medium" name="difficulty" value="12" />
                    </label>
                    <label for="hard" onClick={handleDifficulty}> Hard
                        <input type="radio" id="hard" name="difficulty" value="20" />
                    </label>
                    <button type='button' onClick={handleStart}>Start Game</button>
                </form>
				<p class={styles.description}>A real time strategy game. Mouse over to see unit stats below:</p>
                <div class={styles.guide}>
                {Object.values(units).map(u => (
                    <Tooltip class={styles[u.name]} content={useList(u)}>
                        <p class={u.name}>{u.name}: 
                            <span class={styles[u.css]} role="img" aria-label={u.name + '-icon'}>{u.icon}</span>
                        </p>
                    </Tooltip>
                ))}
                </div>
            </section> 
            <World dimension={dimension} {...state} />
		</>
	);
}
