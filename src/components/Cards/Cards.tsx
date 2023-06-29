import { Link } from 'react-router-dom';
import styles from './Cards.module.css';
import Idata from '../../interfaces/Idata';
import {images} from '../../data/Images';

import { ArrowsOutSimple, HeartStraight, ShareNetwork } from '@phosphor-icons/react';

type propsCard = {
  project: Idata
  setProjects: any
}


export default function Cards({project, setProjects}: propsCard) {

  const props1 = {size:25, color:'#D92525', weight:'fill', className:'cursor-pointer'};
  const props2 = {size:25, color:'#D92525', className:'cursor-pointer'};
  const propsFavorite = project.favorite ? props1 : props2;
  const id = project.id || 0;

  const path = images.find((img: any) => img.id === id);
  const isPath = path ? path.src : '';

  function handleShare() {
    const title = 'minha mensagem';
    const description = 'minha description';
    const currentURL = window.location.origin + `/project/${project.id}`;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title}: ${description}\n${currentURL}`
    )}`;
    window.open(whatsappURL, '_blank');
  }


  return (
    <div className={styles.project}>
      <Link to={`/project/${project.id}`}>
        <img
          className={styles.img__capa}
          src={isPath}
          alt={project.title}
        />
      </Link>
      <h2 className={styles.title}>{project.title}</h2>

      <section className="flex justify-between mt-8">
        <h3 className={styles.subtitle} >{project.type}</h3>

        <div className="flex justify-end gap-3">
          <HeartStraight {...propsFavorite} onClick={()=> setProjects(id)}/>
          <ShareNetwork size={25} color="#033E8C" className="cursor-pointer" onClick={()=>handleShare()}/>
          <Link to={`/project/${project.id}`}>
            <ArrowsOutSimple size={25} color="#033E8C" />
          </Link>
        </div>
      </section>
    </div>
  );
}
