import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Collapse.css'
import arrow_down from '../assets/arrow_down.svg'
import arrow_up from '../assets/arrow_up.svg'

function Collapse({ data }) {
    // Utilisation de useState pour gérer l'état des éléments actifs
    const [activeItem, setActiveItem] = useState([])

    // Fonction pour gérer le basculement d'un élément actif
    const handleToggle = (index) => {
        if (activeItem.includes(index)) {
            // Si l'élément est déjà actif, le supprimer de la liste des éléments actifs
            setActiveItem(activeItem.filter((i) => i !== index))
        } else {
            // Sinon, ajouter l'élément à la liste des éléments actifs
            setActiveItem([...activeItem, index])
        }
    }

    return (
        <div className="collapse-container">
            {data.map((item, index) => (
                <div key={item.id} className="collapse-item">
                    <button onClick={() => handleToggle(index)}>
                        {item.title}
                        {activeItem.includes(index) ? (
                            <img src={arrow_up} alt="Fermer l'élément" />
                        ) : (
                            <img src={arrow_down} alt="Ouvrir l'élément" />
                        )}
                    </button>
                    {activeItem.includes(index) && (
                        <div className="collapse-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    )
}

Collapse.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Collapse
