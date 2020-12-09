import React, {useRef, useState} from 'react'
import styles from './style.module.css';

import {units} from './pieces'
import useInterval from '../../hooks/useInterval'
import useEdge from '../../hooks/useEdge'

import AbilityMenu from './abilityMenu'
const decay = false
export default function World(props) {
    const { delay, matrix, positionOne, positionTwo } = props
    const { dimension } = props
    const world = useRef(null)
    const canReach = pos => {
        let row = Math.ceil(pos/8)
        let col = pos%8
        console.log(row, col)
        let coef = row%2 === 0 ? -1 : 1;
        if(row%2 === 0 && col === 0) coef = 1
        if(row%2 === 1 && col === 0) coef = 0
        console.log([
            -dimension + ( coef), 
            -dimension, -1, 1, dimension, 
            dimension + (coef)
        ])
        return [
            -dimension + ( coef), 
            -dimension, -1, 1, dimension, 
            dimension + (coef)
        ]
    }
    
    const [forts, setForts] = useState([positionOne])
    const [muster, setMuster] = useState([null, null]) // [index, total]
    const [garrison, setGarrison] = useState([]) // list of garrison ids
    const [labor, setLabor] = useState([]) // list of laborer ids (laborers are also garrison)
	const [troops, setTroops] = useState(matrix);
    
    useInterval(() => {
        setTroops(state => {
            return state.map((unit, id) => {
                // console.log('set', id, unit)
                if(unit.total < 0) { return unit.total = 0, unit } 
                if(forts.includes(id) && unit.total < 50) { return unit.total++, unit }
                // if(forts.includes(id) && unit.total >= 75) return unit.total -= Math.floor(Math.random() * 1.05), unit
                if(unit.total <= 50 && garrison.includes(id)) return unit
                if(decay) { return unit.total -= Math.floor(Math.random() * 1.1), unit }
                return unit
            })
        })
    }, delay)
    
    const deployMusteredTroops = (e, unit, target) => {
        e.preventDefault()
        // console.log('Muster', ...muster)
        // console.log('Target', target, unit)
        const pos = muster[0]
        if(!(typeof target === 'number') || !(typeof pos === 'number')) return
        if(useEdge(pos, target, dimension)) return
        if(target === pos) return setMuster([null, null])
        const type = muster[1].type
        const quantity = muster[1].total
        const player = muster[1].player
        if(type !== unit.type && player === unit.player) return
        if(player !== unit.player) return console.log('Battles not yet supported')
        console.log('edge', useEdge(pos, target, dimension), 'same', target === pos)
        
        if(canReach(pos).reduce((acc, cur) => {
            if(useEdge(muster[0], target, dimension)) return acc
            return [...acc, muster[0] + cur]
        }, []).includes(target)) {
            setTroops(prev => prev.map((u, idx) => {
                if(idx === pos) {
                    console.log('1')
                    u.total -= quantity
                    return u
                } else if (idx === target) {
                    console.log('3')
                    u.total += quantity
                    return u
                } else { 
                    console.log('3')
                    return u 
                }
            }))
            setMuster([null, null])
        }
        
    }
    const musterTroops = (unit, id) => {
        console.log(unit, id)
        if(typeof id === 'number' && unit.total > 0) {
            setMuster([id, unit])  
        }
    }
    const deploymentZones = (target) => {
        if(muster[0] === null) return ''
        if(muster[0] === target) return styles.muster
        if(canReach(muster[0]).reduce((acc, cur) => {
            if(useEdge(muster[0], target, dimension)) return acc
            return [...acc, muster[0] + cur]
        }, []).includes(target)) return labor.includes(target) ? styles.build : styles.deploy
    }
    const garrisonTroops = (e, id) => {
        if(garrison.includes(id)) {
            setGarrison(garrison.filter(i => id !== i))
        } else {
            setGarrison([...garrison, id])
        }
        console.log({garrison})
    }
    const useAbility = (e, unit, id) => {
        e.preventDefault()

        console.log(unit, id, units[unit.type].abilities)
    }

    return (
        <div class={styles.worldwrapper}>
        <div class={styles.world} ref={world}>
            <div class={styles.backboard}></div>
            <section class={styles.grid} onDblClick={()=>console.log(troops)} onContextMenu={e => e.preventDefault()}>
                {troops.map((unit, i) => ( 
                        <div class={`${styles.cell} ${forts.includes(i) ? styles.king : ''} ${deploymentZones(i)}`} 
                        onContextMenu={e => deployMusteredTroops(e, unit, i)}>
                            {unit.total > 0 ? 
                            <div class={`${styles.troop}`}
                            onClick={e => musterTroops(unit, i)}
                            onContextMenu={e => useAbility(e, unit, i)}>
                                <span>{unit.total}</span>
                                <span class={styles[units[unit.type].css]}>{units[unit.type].icon}</span>
                                <AbilityMenu abilities={units[unit.type].abilities} />           
                            </div> : null }
                        </div> 
                    ))
                }
            </section>
        </div>
        </div>
    )
}