import styles from './sobreMim.module.css';
import sobreMim from '../../assets/sobreMin.png';

export default function SobreMim() {
  return (
    <div className={styles.postConteudoContainer}>
      <h3 className={styles.subtitulo}>Ola! Me Chamo Flavio</h3>
      <img src={sobreMim} alt="foto" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
      ✦ Olá, tudo bem? Eu sou programador Full Stack e a minha paixão por desenvolvimento de software me traz uma felicidade imensa.
      </p>
      <p className={styles.paragrafo}>
      ✦ A minha história com programação teve início na empresa onde trabalhava. Decidi criar sites utilizando HTML, CSS e WordPress, além de utilizar um banco de dados MySQL. Nessa jornada, precisei aprender sobre DNS, HTTP, HTTPS e como fazer o deploy dos sites. Com a minha experiência anterior na área de Informática, pude me desenvolver ainda mais. Aprendi sobre lógica de programação e os conceitos básicos para criar sites estáticos.
      </p>
      <p className={styles.paragrafo}>
      ✦ Durante o meu curso de Ciência da Computação na Universidade Estácio de Sá, tive a oportunidade de explorar várias linguagens, como Java, Python e C++. Embora não tenha me aprofundado muito em cada uma delas, fui exposto a uma diversidade de conteúdos relacionados à computação.
      </p>
      <p className={styles.paragrafo}>
      ✦ Em seguida, ingressei na Trybe, uma escola focada em programação e habilidades interpessoais. Foi nesse momento que tive a minha primeira experiência real como desenvolvedor, lidando com prazos de implementação de projetos. Aprendi muito enquanto codificava e me comunicava com os meus colegas, compartilhando informações e conhecimentos. Foram inúmeros projetos que contribuíram para o meu crescimento.
      </p>
      <p className={styles.paragrafo}>
      ✦ Como programador Full Stack, adquiri habilidades em lógica de programação, comunicação, entrega contínua, aprendizado constante, protagonismo, além de dominar tecnologias como CSS, HTML, JavaScript, React, Redux, Node.js, MongoDB, SQL, Sequelize, Python e Ciência da Computação e outras ferramentas.
      </p>
      <p className={styles.paragrafo}>
      ✦ Foi durante o meu tempo na Trybe que conquistei um estágio em desenvolvimento Full Stack na Remessa Online. Lá, pude trabalhar com Docker, JavaScript, Angular, Programação Orientada a Objetos, Redis e lógica de resolução de problemas. Continuo aprendendo e me desenvolvendo, aprimorando as habilidades necessárias para utilizar as ferramentas utilizadas pela empresa.
      </p>
      <p className={styles.paragrafo}>
      ✦ Desde então, minha jornada tem sido de aprendizado contínuo. A minha passagem pela Trybe não marcou o fim, pois continuo meus estudos na Alura e muita documentacao  e desenvolvendo projetos que me desafiam e me permitem crescer ainda mais.
      </p>
    </div>
  );
}
