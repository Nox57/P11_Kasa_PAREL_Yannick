import React, { useState, useEffect, useContext } from 'react'
import { LogementsContext } from '../index'
import { Link } from 'react-router-dom'
import '../styles/components/Gallery.css'

function Gallery() {
    const logementsData = useContext(LogementsContext)

    const [cardsData, setCardData] = useState([])

    useEffect(() => {
        setCardData(logementsData)
    }, [logementsData])

    return (
        <div className="cards-container">
            {cardsData.map((Card) => (
                <div
                    className="card"
                    key={Card.id}
                    style={{
                        backgroundImage:
                            'linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.5) 100%), url(' +
                            Card.cover +
                            ')',
                        backgroundSize: 'cover',
                    }}
                >
                    <Link to={`/accomodation/${Card.id}`}>
                        <h2>{Card.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Gallery
