import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import jsonData from '../datas/logements.json'
import '../styles/Cards.css'

function Cards() {
    const [cardsData, setCardData] = useState([])

    useEffect(() => {
        setCardData(jsonData)
    }, [])

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

export default Cards
