import Collapse from '../components/Collapse'
import aboutData from '../datas/about.json'
import Banner from '../components/Banner'
import '../styles/pages/About.css'
import bannerImg from '../assets/about.png'

function About() {
    document.title = 'Kasa - A Propos'

    return (
        <div className="about">
            <Banner imageLink={bannerImg} />
            <div className="about-collapses">
                {aboutData.map((item) => {
                    return (
                        <Collapse
                            key={item.id}
                            title={item.title}
                            content={item.content}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default About
