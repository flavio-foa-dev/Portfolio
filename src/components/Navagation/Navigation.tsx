import SocialMidia from '../SocialMidia/SocialMidia';
import styles from './Navigation.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const url = useLocation();

  return (
    <header className="flex justify-around sm:px-28">
      <nav className="flex items-center justify-center h-[6rem] gap-3">
        <Link to='/'>
          <p className={url.pathname === '/' ? styles.ative : ''}>Home</p>
        </Link>
        <Link to='/sobre'>
          <p className={url.pathname === '/sobre' ? styles.ative : ''}>Sobre</p>
        </Link>
      </nav>
      <SocialMidia/>
    </header>
  );
}

