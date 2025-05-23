import { useState, useEffect} from 'react'
import { Link } from "react-router"

const AllDataCard =(props)=> {

    const [ name, setName ] = useState(props.data.team || props.data.franchise || props.data.species || props.data.power)

    return (
        <div className="col">
            <div className="figure h-100 franchise-figure">
                <img src="https://placehold.co/50x50" alt={`logo for ${props.category}`} className="img-fluid image figure-img franchise-img" />
                <figcaption className="figure-caption fran-fig-cap">
                    <Link to={`/${props.table}/${name}`}>
                        { name } 
                    </Link>
                </figcaption>
            </div>
        </div>
    )
}

export default AllDataCard