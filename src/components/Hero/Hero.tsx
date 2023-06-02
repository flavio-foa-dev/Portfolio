import circle from '../../assets/circle.png';
import minhafoto from '../../assets/minhafoto.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={`${styles.hero} bg-AzulEscuro`}>

      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>My Portfolio</h1>
        <p className={styles.paragrafo}>
        Hola! Qué tal? Boas vindas ao meu portfolio! Me chamo Flavio Andrade, programador Full Stack. Aqui compartilho vários conhecimentos.
        </p>
        <p className={styles.paragrafo}>
        Explore meu portfolio e descubra como minhas ideias ganham vida através dos meus projetos.
        </p>
      </div>

      <div className={styles.imagens}>
        <img src={circle} alt="ciculo colorido" className={styles.circuloColorido}/>
        <img src={minhafoto} alt="foto Flavio Andrade" className={styles.minhaFoto} />
      </div>
    </div>
  );
}
