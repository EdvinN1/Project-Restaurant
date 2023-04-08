import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom';
import Footer from './components/footer.jsx';
import {useStates, useAutoKeys, useDebug} from 'react-easier';
import { GlobalProvider } from './GlobalContext';

function App() {
    useAutoKeys();
    /* useDebug(); */
    useStates("access", {
        admin: false,
        loggedIn: false
    })
    useStates("cart",[])
    return (
        <GlobalProvider>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </GlobalProvider>
    )
}

export default App
