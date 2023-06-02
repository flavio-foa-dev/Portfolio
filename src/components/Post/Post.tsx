import { useParams } from 'react-router-dom';
import styles from './post.module.css';
import data from '../../data/data.json';
import Carrossel from '../Carrossel/Carrossel';
import { images } from '../../data/Images';
import { Airplay, CaretUpDown, GithubLogo, Hammer, Lightbulb, Link } from '@phosphor-icons/react';
import Loading from '../Loading/Loading';

export default function Post() {
  const params = useParams();
  const parseId = Number(params.id);
  const dataFiltered = data.find((item) => item.id === parseId);

  return (
    <div className={styles.container}>
      <Carrossel images={images} intervalTime={4000}/>
      <section className={styles.tools}>
        <div>
          { dataFiltered ?
            <ul className="flex flex-col gap-4 font-serif text-AzulEscuro">
              <li className="flex items-center gap-2"><Airplay size={25} color="#172382" />{dataFiltered.title}</li>
              <li className="flex items-center gap-2"><Link size={25} color="#172382" /><a href={dataFiltered.site} target="blank">{dataFiltered.site}</a></li>
              <li className="flex items-center gap-2"><GithubLogo size={25} color="#172382" /><a href={dataFiltered.github} target="blank">{dataFiltered.github}</a></li>
              <li className="flex items-center gap-2"><Hammer size={25} color="#172382" />{dataFiltered.tools}</li>
              <li className="flex items-center gap-2"><Lightbulb size={25} color="#172382" />logica</li>
              <li className="flex items-center gap-2"><CaretUpDown size={25} color="#172382"/>{dataFiltered.type}</li>
            </ul>
            : <div className='flex items-center gap-6'>
              <h2 className=''>Nao encontado</h2>
              <Loading/>
            </div>}
        </div>
        <div className="">
          <iframe
            className={styles.iframe}
            src={dataFiltered?.youTube}
            title={dataFiltered?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>

      </section>
    </div>
  );
}
