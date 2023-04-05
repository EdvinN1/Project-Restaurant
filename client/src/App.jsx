import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom';
import Footer from './components/footer.jsx';
import { useStates } from 'react-easier';
import { GlobalProvider } from './GlobalContext';

function App() {
    useStates("access", {
        admin: false,
        loggedIn: false
    })
    return (
        <GlobalProvider>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </GlobalProvider>
    )
}

export default App
