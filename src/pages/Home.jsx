import Banner from '../components/Banner'
import Cards from '../components/Cards'
import '../styles/Home.css'
import bannerImg from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png'

function Home() {
    return (
        <div className="home">
            <Banner
                imageLink={bannerImg}
                title="Chez vous, partout et ailleurs"
            />
            <Cards />
        </div>
    )
}

export default Home
