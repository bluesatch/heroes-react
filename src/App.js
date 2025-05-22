import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'


import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Franchise from './components/Franchise'
import AllHeroes from './components/AllHeroes'
import HeroSingle from './components/HeroSingle'
import Error from './components/Error'

const App =()=> {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Main />} />
                <Route path="/franchises" element={ <Franchise />} />
                <Route path="/franchises/:endpoint" element={ <AllHeroes table="franchise" />} />
                <Route path="/heroes" element={ <AllHeroes table='hero' />}/>
                <Route path="/heroes/:id" element={ <HeroSingle />} />
                <Route path="*" element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App