import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./style.module.css";

import { units } from "./pieces";
import useInterval from "../../hooks/useInterval";
import useEdge from "../../hooks/useEdge";
import useGrowth from "../../hooks/useGrowth";

import AbilityMenu from "./abilityMenu";
import UnitCard from './unitcard'
const decay = false;
export default function World(props) {
  const { delay, matrix, positionOne, positionTwo, resources } = props;
  const { dimension } = props;
  const world = useRef(null);
  const canReach = (pos) => {
    let row = Math.ceil(pos / 8);
    let col = pos % 8;
    let coef = row % 2 === 0 ? -1 : 1;
    if (row % 2 === 0 && col === 0) coef = 1;
    if (row % 2 === 1 && col === 0) coef = 0;
    return [-dimension + coef, -dimension, -1, 1, dimension, dimension + coef];
  };
  // console.log('world', resources)
  const [forts, setForts] = useState([positionOne]);
  const [muster, setMuster] = useState([null, null]); // [index, total]
  const [hasSelection, setHasSelection] = useState(false)
  const [active, setActive] = useState([]); // Array<{id, type, ability, total?}>
  const [troops, setTroops] = useState(matrix);
  // const [boost, setBoost] = useState(1)
  useInterval(() => {
    console.log("active", active);
    setTroops((state) => {
      return state.map((unit, id) => {
        let cap = units[unit.type].cap;
        if (unit.total < 0) {
          return (unit.total = 0), unit;
        }
        if (forts.includes(id)) {
          let delta = useGrowth(cap, unit.total);
          unit.total += delta;
          return unit;
        }
        if (decay) {
          return (unit.total -= Math.floor(Math.random() * 1.1)), unit;
        }
        return unit;
      });
    });
  }, delay);

  const deployMusteredTroops = (e, unit, target) => {
    e.preventDefault();
    setHasSelection(false);
    // console.log('Muster', ...muster)
    // console.log('Target', target, unit)
    const pos = muster[0];
    if (!(typeof target === "number") || !(typeof pos === "number")) return;
    if (useEdge(pos, target, dimension)) return;
    if (
      target === pos ||
      troops[target].type !== unit.type ||
      troops[target].total >= units[troops[target].type].cap
    ) {
      return setMuster([null, null]);
    }
    let delta;
    if (troops[target].total + unit.total >= units[unit.type].cap) {
      delta = units[unit.type].cap - unit.total;
    }
    const type = muster[1].type;
    const quantity = muster[1].total;
    const player = muster[1].player;
    if (type !== unit.type && player === unit.player) return;
    if (player !== unit.player) return console.log("Battles not yet supported");
    // console.log('edge', useEdge(pos, target, dimension), 'same', target === pos)

    if (
      canReach(pos)
        .reduce((acc, cur) => {
          if (useEdge(muster[0], target, dimension)) return acc;
          return [...acc, muster[0] + cur];
        }, [])
        .includes(target)
    ) {
      setTroops((prev) =>
        prev.map((u, idx) => {
          if (idx === pos) {
            u.total -= delta ?? quantity;
            return u;
          } else if (idx === target) {
            u.total += delta ?? quantity;
            return u;
          } else {
            return u;
          }
        })
      );
      setMuster([null, null]);
    }
  };
  const musterTroops = (unit, id) => {
    console.log(unit, id);
    if (active.find((a) => a.id === id)) return;
    if (typeof id === "number" && unit.total > 0) {
      setMuster([id, unit]);
      setHasSelection(true)
    }
  };
  const activateAbility = (e, unit, id) => {
    e.preventDefault();
    setHasSelection(false)
    console.log(unit, id, units[unit.type].abilities);
    if (active.find((a) => a.id === id)) return;
    let troop = e.currentTarget;
    if (typeof id === "number" && unit.total > 0) {
      setActive([
        ...active,
        { id, type: unit.type, total: unit.total, ability: "build" },
      ]);
      let cd = Math.random() > 0.5 ? 10 : 2;
      troop.style.setProperty("animation-duration", cd + "s");
      troop.classList.toggle("oncooldown");
      setTimeout(() => {
        setActive((prev) => prev.filter((a) => a.id !== id));
        troop.classList.remove("oncooldown");
      }, cd * 1000);
    }
  };
  const deploymentZones = (target) => {
    if (muster[0] === null) return "";
    if (muster[0] === target) return styles.muster;
    if (
      canReach(muster[0])
        .reduce((acc, cur) => {
          if (useEdge(muster[0], target, dimension)) return acc;
          return [...acc, muster[0] + cur];
        }, [])
        .includes(target)
    )
      return styles.deploy;
    return "";
  };
  const buildZones = (target) => {
    if (muster[0] === null) return "";
    if (muster[0] === target) return styles.muster;
    if (
      canReach(muster[0])
        .reduce((acc, cur) => {
          if (useEdge(muster[0], target, dimension)) return acc;
          return [...acc, muster[0] + cur];
        }, [])
        .includes(target)
    ) {
      return styles.build;
    }
    return "";
  };

  return (
    <div class={styles.worldwrapper}>
      <div class={styles.world} ref={world}>
        <div class={styles.backboard}></div>
        <section
          class={styles.grid}
          onDblClick={() => console.log(troops)}
          onContextMenu={(e) => e.preventDefault()}
        >
          {troops.map((unit, i) => (
            <div
              class={`${styles.cell} ${
                forts.includes(i) ? styles.king : ""
              } ${deploymentZones(i)}`}
              onContextMenu={(e) => deployMusteredTroops(e, unit, i)}
            >
              {unit.total > 0 ? (
                <div
                  class={`${styles.troop}`}
                  onClick={(e) => musterTroops(unit, i)}
                  onContextMenu={(e) => activateAbility(e, unit, i)}
                >
                  <span>{Math.round(unit.total)}</span>
                  <span class={styles[units[unit.type].css]}>
                    {units[unit.type].icon}
                  </span>
                  <AbilityMenu abilities={units[unit.type].abilities} />
                </div>
              ) : null}
              {typeof resources[i] === "string" ? (
                <span class={`${styles.feature} ${resources[i]}`}>
                  {resources[i]}
                </span>
              ) : null}
            </div>
          ))}
        </section>
      </div>
      <div>
        <UnitCard>
          <div>Position: {muster[0]}</div>
          <div>Type: {muster[1].type}</div>
          <div>Troops: <span>{Math.round(muster[1].total)}</span></div>
        </UnitCard>
      </div>
    </div>
  );
}
