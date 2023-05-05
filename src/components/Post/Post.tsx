
import { useParams } from 'react-router-dom'
import styles from './post.module.css'
import data from '../../data/data.json'




export default function Post() {

  const params = useParams()
  const parseId = Number(params.id)
  const dataFiltered = data.find((item) => item.id === parseId)



  return (
    <div className={styles.container}>


      <section className="video">

      </section>
        { dataFiltered ?
          <ul>
            <li>{dataFiltered.title}</li>
            <li>{dataFiltered.site}</li>

            <li>{dataFiltered.type}</li>
          </ul>
          : "Nao encontardo"}
      <section className='tools'>
          <p>Ferramentas usadas Ract react routerdom, module css, tailwindcss, </p>
          <p></p>

      </section>


  </div>
  )
}
