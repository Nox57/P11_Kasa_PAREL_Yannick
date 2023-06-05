import '../styles/Header.css'
import logo from '../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="Logo Kasa" />
                </NavLink>
            </div>
            <nav className="menu">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
                <Link to="/ergoprkgor">Test 404</Link>
            </nav>
        </header>
    )
}

export default Header
