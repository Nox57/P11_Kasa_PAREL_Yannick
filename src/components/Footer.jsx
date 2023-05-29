import '../styles/Footer.css'
import logo_footer from '../assets/logo-footer.svg'

function Footer() {
    return (
        <footer>
            <div className="footer-image-container">
                <img src={logo_footer} alt="Logo Kasa pied de page" />
            </div>
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
