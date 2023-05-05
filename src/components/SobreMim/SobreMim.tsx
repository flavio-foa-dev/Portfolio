import styles from './sobreMim.module.css'
import sobreMim from '../../assets/sobreMin.png'

export default function SobreMim() {
  return (
    <div className={styles.postConteudoContainer}>
      <h3 className={styles.subtitulo}>Ola eu sou Flavio</h3>
      <img src={sobreMim} alt="foto" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou programador Full Stack sou feliz por ser dev.
      </p>
      <p className={styles.paragrafo}>
          Minha história com programação começou na empresa onde Trabalhava, quando decidi criar sites em HTML, CSS e wordpress com banco de dados Mysql tive que  aprender sobre dns http https e como funciona o deploy, e como ja trabalhava com Informática fui me desenvolvendo. Eu aprendi lógica de programação e o básico para desenvolver sites staticos
      </p>
      <p className={styles.paragrafo}>
          No ensino superior, escolhi cursar Ciencias da Computacao na Universidade Estacio de Sa. La pude ver
          várias linguagens, como Java, Python, C++, mas sem aprofundar muito em cada uma delas. Eu via muitos conteudos diversos sobre a computacao em si.

      </p>
      <p className={styles.paragrafo}>
          Entrando para escola Trybe, uma escola focada em programacao e softskils.
          Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para os projetos,  aprendi muito enquanto codificava e me comunicava com meus colegas para trocar informacoes relacionadas. Foram muitos projetos.
      </p>
      <p className={styles.paragrafo}>
          Como programador Full Stack aprendi logica de programacao, comunicacao, entrega continua, aprender a aprender, protagonismo,  css, html, Javascript, React, Redux, nodeJS, mongoDB, sql, sequelize, Python, ciencias da computacao.
          </p>
      <p className={styles.paragrafo}>
          E foi enquanto eu estava na trybe que consegui estágio em desenvolvimento fullStack. Eu encontrei uma vaga na Remessa Online trabalhando com docker javascript. angular, POO, Redis, logica de solucoes de problemas. Continuei aprendendo  e me desenvolvendo nas ferramentas que a empresa usava.
      </p>
      <p className={styles.paragrafo}>
          Desde então, tem sido  um aprendizados continuo. A minha jornada nao acabou na trybe, continuo os meus estudos na Alura e desenvolvendo projetos.
       </p>

    </div>
  )
}
