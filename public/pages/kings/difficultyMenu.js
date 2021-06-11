import { useEffect } from "preact/hooks";
import styles from './style.module.css'

export default function Difficulty (props) {
  const { dimension, setDimension, setState } = props

  const handleDifficulty = (e) => {
    if (e.target.value) {
      setDimension(Number(e.target.value));
    }
  };
  const handleStart = (e) => {
    e.preventDefault();
    setState(state => {
      return {
        ...state, 
        positionTwo: dimension ** 2 - 1,
        matrix: Array(dimension ** 2)
        .fill(0)
        .map(() => ({ type: "c", total: 0, player: 1 }))
      }
    })
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--grid-columns",
      dimension.toString()
    );
    document.documentElement.style.setProperty(
      "--grid-lines",
      dimension.toString()
    );
  }, [dimension]);

  return (
    <form class={styles.settings}>
      Choose difficulty:
      <label for="easy" onClick={handleDifficulty}>
        Easy
        <input type="radio" id="easy" name="difficulty" value="8" checked />
      </label>
      <label for="medium" onClick={handleDifficulty}>
        Medium
        <input type="radio" id="medium" name="difficulty" value="12" />
      </label>
      <label for="hard" onClick={handleDifficulty}>
        Hard
        <input type="radio" id="hard" name="difficulty" value="20" />
      </label>
      <button type="button" class={styles.startBtn} onClick={handleStart}>
        Start Game
      </button>
    </form>
  );
}
