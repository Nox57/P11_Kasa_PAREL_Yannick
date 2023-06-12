import React from 'react'
import '../styles/Banner.css'

function Banner(props) {
    const { imageLink, title } = props

    return (
        <div className="banner-container">
            <img src={imageLink} alt="Bannière" />
            {title && <h1>{title}</h1>}
        </div>
    )
}

export default Banner
