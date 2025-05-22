import { useState, useEffect } from 'react'
import axios from 'axios'

import FranchiseCard from './FranchiseCard'

const Franchise =()=> {

    const [ franchises, setFranchises ] = useState([])

    useEffect(()=> {

        const url = 'http://localhost:3002/api/franchise'

        axios.get(url).then(res => setFranchises(res.data))
    }, [])

    const franchiseCardComponents = franchises.map(franchise => {
        return (
            <FranchiseCard 
                key={ franchise.franchise_id }
                id={ franchise.franchise_id }
                franchise={ franchise.franchise }
                founded={ franchise.founded }
            />
        )
    })

    return (
        <main className="main" id="franchiseMain">
            <div className="container">
                <h2 className="franchise-heading">All Franchises</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    { franchiseCardComponents }
                </div>
            </div>
        </main>
    )
}

export default Franchise