import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom';
import Footer from './components/footer.jsx';

function App() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
