import '../styles/Header.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" />
                </Link>
            </div>
            <nav className="menu">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
                <Link to="/ergoprkgor">Test 404</Link>
            </nav>
        </header>
    )
}

export default Header
