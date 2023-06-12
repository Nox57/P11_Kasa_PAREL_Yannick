import Collapse from '../components/Collapse'
import aboutData from '../datas/about.json'
import Banner from '../components/Banner'
import '../styles/About.css'
import bannerImg from '../assets/about.svg'

function About() {
    return (
        <div className="about">
            <Banner imageLink={bannerImg} />
            <Collapse data={aboutData} />
        </div>
    )
}

export default About
