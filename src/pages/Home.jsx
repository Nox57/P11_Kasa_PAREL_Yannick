import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import '../styles/Home.css'
import bannerImg from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png'

function Home() {
    return (
        <div className="home">
            <Banner
                imageLink={bannerImg}
                title="Chez vous, partout et ailleurs"
            />
            <Gallery />
        </div>
    )
}

export default Home
