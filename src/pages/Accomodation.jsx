import { useParams, Navigate } from 'react-router-dom'
import accomodationsData from '../datas/logements.json'
import Collapse from '../components/Collapse'
import Carrousel from '../components/Carrousel'
import '../styles/Accomodation.css'
import star from '../assets/star.svg'
import star_filled from '../assets/star_filled.svg'

function Accomodation() {
    let { id } = useParams()

    const accomodation = accomodationsData.find((item) => item.id === id)

    if (!accomodation) {
        return <Navigate to="/404" />
    }

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
                stars.push(<img src={star_filled} alt="etoiles" />)
            } else {
                stars.push(<img src={star} alt="etoiles" />)
            }
        }

        return stars
    }

    return (
        <div className="accomodation">
            {pictures && pictures.length > 0 && (
                <div className="carrousel-container">
                    <Carrousel images={pictures} />
                </div>
            )}

            <div className="title-container">
                <div>
                    <h1>{title}</h1>
                    <p>{location}</p>
                </div>
                <div className="host-container">
                    <span>{host.name}</span>
                    <img src={host.picture} alt="Host" />
                </div>
            </div>

            <div className="tags_rating_container">
                <div>
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <div>{renderStars()}</div>
            </div>

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
    )
}

export default Accomodation
