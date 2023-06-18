import { PropTypes } from 'prop-types'
import { useState } from 'react'
import arrowPrevious from '../assets/carrousel-previous.svg'
import arrowNext from '../assets/carrousel-next.svg'
import '../styles/components/Carrousel.css'

function Carrousel({ images }) {
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        const nextIndex = (index + 1) % images.length
        setIndex(nextIndex)
    }

    const handlePrevious = () => {
        const previousIndex = (index - 1 + images.length) % images.length
        setIndex(previousIndex)
    }

    return (
        <div className="carrousel-container">
            <img
                className="carrousel-image"
                src={images[index]}
                alt={`Représentation ${index + 1} du logement`}
            />
            <div className="carrousel-controls">
                <img
                    className="carrousel-controls-previous"
                    src={arrowPrevious}
                    onClick={handlePrevious}
                    alt="Voir la représentation précédente"
                />
                <img
                    className="carrousel-controls-next"
                    src={arrowNext}
                    onClick={handleNext}
                    alt="Voir la représentation suivante"
                />
            </div>
        </div>
    )
}

Carrousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carrousel
