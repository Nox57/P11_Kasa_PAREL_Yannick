import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { LogementsContext } from '../index'
import '../styles/pages/Accomodation.css'
import Collapse from '../components/Collapse'
import Carrousel from '../components/Carrousel'
import star from '../assets/star.svg'
import star_filled from '../assets/star_filled.svg'
import NotFound from './NotFound'

function Accomodation() {
    let { id } = useParams()
    const logementsData = useContext(LogementsContext)

    const accomodation = logementsData.find((item) => item.id === id)

    if (!accomodation) {
        return <NotFound />
    }

    document.title = `Kasa - ${accomodation.title}`

    const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
    } = accomodation

    // Fonction pour générer les étoiles en fonction du rating
    const renderStars = () => {
        const stars = []

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={star_filled} alt="etoile" />)
            } else {
                stars.push(<img key={i} src={star} alt="etoile vide" />)
            }
        }

        return stars
    }

    return (
        <div className="accomodation-container">
            {pictures && pictures.length > 0 && (
                <div className="carrousel-container">
                    <Carrousel images={pictures} />
                </div>
            )}

            <div className="info-container">
                <div className="accomodation-info-wrapper">
                    <div className="title-wrapper">
                        <div>
                            <h1>{title}</h1>
                            <p>{location}</p>
                        </div>
                    </div>

                    <div className="tags-wrapper">
                        <div>
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="host-info-wrapper">
                    <div className="host-details">
                        <span>{host.name}</span>
                        <img src={host.picture} alt="Host" />
                    </div>

                    <div className="rating-wrapper">
                        <div className="rating">{renderStars()}</div>
                    </div>
                </div>
            </div>

            <div className="dropdowns">
                <div className="description-container">
                    <Collapse title="Description" content={description} />
                </div>

                <div className="equipements-container">
                    <Collapse
                        title="Équipements"
                        content={equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    />
                </div>
            </div>
        </div>
    )
}

export default Accomodation
