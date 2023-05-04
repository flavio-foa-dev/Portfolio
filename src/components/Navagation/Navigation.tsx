
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="">
      <nav className="flex items-center justify-center h-[6rem] gap-3">
        <Link to='/'>
          <p className="">Home</p>
        </Link>
        <Link to='/sobre'>Sobre</Link>
      </nav>
    </header>
  )
}

