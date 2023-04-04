import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom';
import Footer from './components/footer.jsx';
import { useStates } from 'react-easier';

function App() {
    useStates("access", {
        admin: false,
        loggedIn: false
    })
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
