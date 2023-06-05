import Collapse from '../components/Collapse'
import aboutData from '../datas/about.json'
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <Collapse data={aboutData} />
        </div>
    )
}

export default About
