import styles from './socialMidia.module.css';
import { GithubLogo, LinkedinLogo, PinterestLogo, YoutubeLogo } from '@phosphor-icons/react';


export default function SocialMidia() {
  return (
    <div className={styles.socialmidia}>
      <a href="https://www.youtube.com/watch?v=r6zV25CrscE&list=PLHT0iYvkz5nDIzS3aUHwbKj4qij1ELyWZ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeLogo size={30} color="#172382"/>
      </a>


      <a href="https://portfolio-one-alpha-98.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PinterestLogo size={25} color="#172382"/>
      </a>

      <a href="http://www.linkedin.com/in/flavio-foa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo size={25} color="#172382"/>
      </a>

      <a href="https://github.com/flavio-foa-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo size={25} color="#172382"/>
      </a>

    </div>
  );
}
