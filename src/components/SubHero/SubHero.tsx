import styles from "./SubHero.module.css"

export default function SubHero(props: any) {

  return (
    <section className={styles.banerContainer}>
      <div className={styles.banerPhoto} style={{backgroundImage:`url(${props.photo})`}}>
      </div>
      <h2 className={styles.title}>{props.title}</h2>
    </section>
  )
}
