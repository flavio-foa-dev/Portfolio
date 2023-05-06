import { Link } from "react-router-dom";
import styles from "./Cards.module.css"
import Idata from "../../interfaces/Idata"
import {images} from "../../data/Images"

import { ArrowsOutSimple, HeartStraight } from "@phosphor-icons/react";

type propsCard = {
  project: Idata
  setProjects: any
}


export default function Cards({project, setProjects}: propsCard) {

  const props1 = {size:25, color:"#D92525", weight:"fill", className:"cursor-pointer"}
  const props2 = {size:25, color:"#D92525", className:"cursor-pointer"}
  let propsFavorite = project.favorite ? props1 : props2
  const id = project.id || 0

  const path = images.find((img: any) => img.id === id)
  const isPath = path ? path.src : ""


  return (
    <div className={styles.project}>
        <img
          className={styles.img__capa}
          src={ isPath}
          alt={project.title}
        />
        <h2 className={styles.title}>{project.title}</h2>

        <section className="flex justify-between mt-8">
          <h3 className={styles.subtitle} >{project.type}</h3>

          <div className="flex justify-end gap-3">
            <HeartStraight {...propsFavorite} onClick={()=> setProjects(id)}/>
            <Link to={`/project/${project.id}`}>
              <ArrowsOutSimple size={25} color="#033E8C" />
            </Link>
          </div>
        </section>
      </div>
  )
}
