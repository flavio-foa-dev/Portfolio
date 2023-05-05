import { Link } from "react-router-dom";
import styles from "./Cards.module.css"
import Idata from "../../interfaces/Idata"

import { ArrowsOutSimple, HeartStraight } from "@phosphor-icons/react";

type propsCard = {
  project: Idata
  setProjects: (id: number) => void
}


export default function Cards({project, setProjects}: propsCard) {

  const props1 = {size:25, color:"#D92525", weight:"fill", className:"cursor-pointer"}
  const props2 = {size:25, color:"#D92525", className:"cursor-pointer"}
  let propsFavorite = project.favorite ? props1 : props2

  return (
    <div className={styles.project}>
        <img
          className={styles.img__capa}
          src={`../../../public/Projects/${project.id}/capa.png`}
          alt={project.title}
        />
        <h2 className={styles.title}>{project.title}</h2>

        <section className="flex justify-between mt-8">
          <h3 className={styles.subtitle} >{project.type}</h3>

          <div className="flex justify-end gap-3">
            <HeartStraight {...propsFavorite} onClick={()=> setProjects(project.id)}/>
            <Link to={`/project/${project.id}`}>
              <ArrowsOutSimple size={25} color="#033E8C" />
            </Link>
          </div>
        </section>
      </div>
  )
}
