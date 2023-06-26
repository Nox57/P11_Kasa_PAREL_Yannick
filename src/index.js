import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logementsData from './datas/logements.json'
import './styles/index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

export const LogementsContext = React.createContext(logementsData)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accomodation/:id" element={<Accomodation />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
