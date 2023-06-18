import '../styles/pages/NotFound.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="notfound">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </p>
        </div>
    )
}

export default NotFound
