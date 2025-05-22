import { Link } from "react-router"

const FranchiseCard =(props)=> {

    return (
        <div className="col">
            <div className="figure h-100 franchise-figure">
                <img src="https://placehold.co/50x50" alt={`logo for ${props.franchise}`} className="img-fluid image figure-img franchise-img" />
                <figcaption className="figure-caption fran-fig-cap">
                    <Link to={`/franchises/${props.franchise}`}>
                        {props.franchise}
                    </Link>
                </figcaption>
            </div>
        </div>
    )
}

export default FranchiseCard