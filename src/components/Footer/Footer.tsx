import icon from '../../assets/marca.svg'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
     <img className={styles.img} src={icon} alt="icon"/>
     <span>Desenvolvido Flavio Andrade</span>

    </footer>
  )
}
