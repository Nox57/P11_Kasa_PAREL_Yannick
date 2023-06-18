import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/components/Collapse.css'
import arrow_down from '../assets/arrow_down.svg'
import arrow_up from '../assets/arrow_up.svg'

function Collapse({ title, content }) {
    // Utilisation de useState pour gérer l'état des éléments actifs
    const [activeItem, setActiveItem] = useState(false)

    // Fonction pour gérer le basculement d'un élément actif
    const handleToggle = () => {
        setActiveItem(!activeItem)
    }

    return (
        <div className="collapse-container">
            <div className="collapse-item">
                <button onClick={handleToggle}>
                    {title}
                    <img
                        src={activeItem ? arrow_up : arrow_down}
                        alt={
                            activeItem ? "Fermer l'élément" : "Ouvrir l'élément"
                        }
                    />
                </button>
                {activeItem && (
                    <div className="collapse-content">{content}</div>
                )}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Collapse
