import { useState } from 'react';
import data from '../../data/data.json';
import Cards from '../Cards/Cards';
import styles from './ListCards.module.css';

export default function ListCards() {
  const [projects, setProjects]= useState(data);

  function isFavorite(id: number){
    setProjects(projects.map((project) => {
      if(project.id === id){
        project.favorite = !project.favorite;
      }
      return project;
    }));


  }
  return (
    <>
      <ul className={styles.ul}>
        {projects.map((project)=> (
          <li key={project.id}>
            <Cards project={project} setProjects={isFavorite}/>
          </li>
        ))}

      </ul>
    </>
  );
}
