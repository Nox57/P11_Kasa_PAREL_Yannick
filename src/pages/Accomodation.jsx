import { useParams } from 'react-router-dom'
// useLoaderData
import '../styles/Accomodation.css'

function Accomodation() {
    let { id } = useParams()

    return (
        <div className="accomodation">
            <p>{id}</p>
        </div>
    )
}

export default Accomodation
