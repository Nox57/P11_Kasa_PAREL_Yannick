import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

// Création d'un contexte pour les données des logements
export const LogementsContext = React.createContext()

const App = () => {
    // Utilisation de l'état pour stocker les données de logements
    const [logementsData, setLogementsData] = useState(null)

    useEffect(() => {
        // Essayez d'obtenir les données des logements dans le local storage au chargement de la page
        const cachedLogementsData = localStorage.getItem('logementsData')
        if (cachedLogementsData) {
            // Si les données sont disponibles dans le local storage, on définit l'état
            setLogementsData(JSON.parse(cachedLogementsData))
        } else {
            // Sinon, on récupère les données des logements et on les stocke dans le local storage
            fetch('logements.json')
                .then((response) => response.json())
                .then((data) => {
                    setLogementsData(data)
                    localStorage.setItem('logementsData', JSON.stringify(data))
                })
                .catch((error) => console.error(error))
        }
    }, [])

    // Chargement
    if (!logementsData) {
        return <div>Chargement de la page.</div>
    }

    // On affiche notre app lorsque les données sont chargées
    return (
        // Fournir les données des logements à tous les composants enfants via le contexte
        <LogementsContext.Provider value={logementsData}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/accomodation/:id"
                        element={<Accomodation />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </LogementsContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
