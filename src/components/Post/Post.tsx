import { useParams } from 'react-router-dom'
import styles from './post.module.css'
import data from '../../data/data.json'
import Carrossel from '../Carrossel/Carrossel';


const images = [
  {
    src: 'https://media.istockphoto.com/id/1394348763/pt/foto/organization-process.jpg?b=1&s=170667a&w=0&k=20&c=4_Wt2NaFQCZX9nrtYhRZoGJhAYSLlpR_ddKDpeRBk0k=',
    alt: 'Descrição da imagem 1'
  },
  {
    src: 'https://media.istockphoto.com/id/1392204000/pt/foto/concept-of-organizing.jpg?b=1&s=170667a&w=0&k=20&c=a_7g_kAKMLo6t9QNaa-9FmDseAsZ3BBC8_os2ExmKDo=',
    alt: 'Descrição da imagem 2'
  },
  {
    src: 'https://media.istockphoto.com/id/1412148116/pt/foto/business-goal-achievement-workflow-and-process-automation-flowchart.jpg?b=1&s=170667a&w=0&k=20&c=Xk3GMOysZMc_4m8bER9v7Dr4MNRWrlxOz-8EJUq2EwY=',
    alt: 'Descrição da imagem 3'
  }
];






export default function Post() {

  const params = useParams()
  const parseId = Number(params.id)
  const dataFiltered = data.find((item) => item.id === parseId)



  return (
    <div className={styles.container}>
      <Carrossel images={images} intervalTime={3000}/>

      <section className={styles.tools}>

         <div>
          { dataFiltered ?
            <ul>
              <li>{dataFiltered.title}</li>
              <li>{dataFiltered.site}</li>
              <li>{dataFiltered.type}</li>
              <li>Ferramentas usadas Ract react routerdom, module css, tailwindcss,</li>
              <li>desafios solucionados</li>
            </ul>
          : "Nao encontardo"}
         </div>

        <div className="">
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/kf2UmO_Azls"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            >
          </iframe>
        </div>

      </section>
    </div>
  )
}
