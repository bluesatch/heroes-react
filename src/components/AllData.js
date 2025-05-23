import { useState, useEffect } from 'react'
import axios from 'axios'

import AllDataCard from './AllDataCard'

const AllData =( props )=> {

    const [ table, setTable ] = useState(props.table)
    const [ dataArr, setDataArr ] = useState([])
    const [ name, setName ] = useState(props.name)

    useEffect(()=> {

        const url = `http://localhost:3002/api/${table}`

        axios.get(url).then(res => setDataArr(res.data))
    }, [])

    const allDataCardComponents = dataArr.map(item => {
        
        return (
            <AllDataCard 
                key={dataArr.indexOf(item)} 
                table={table} 
                data={item} 
            />  
        )
    })

    return (
        <main className="main" id="franchiseMain">
            <div className="container">
                <h2 className="franchise-heading">All {table}</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    { allDataCardComponents }
                </div>
            </div>
        </main>
    )
}

export default AllData