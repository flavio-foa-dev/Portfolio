import icon from '../../assets/marca.svg';
import SocialMidia from '../SocialMidia/SocialMidia';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialtext}>
        <img className={styles.img} src={icon} alt="icon"/>
        <span><b> Desenvolvido por Flavio Andrade &copy;{ new Date().getFullYear()} </b> </span>
      </div>
      <SocialMidia/>
    </footer>
  );
}
