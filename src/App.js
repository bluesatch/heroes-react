import { Routes, Route} from 'react-router'

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Error from './components/Error'

const App =()=> {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Main />} />
                
                <Route path="*" element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App