import useTraceUpdate from '../../hooks/useTraceUpdate'
import styles from './style.module.css'

export default function UnitCard (props) {

    useTraceUpdate(props)
    return (
      <section class={styles.unitcard}>
        <div>Unit Card</div>
        <div>Stats</div>
        <div>Abilities</div>
        {props.children}
      </section>
    )
}

// export default UnitCard
