import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom';
import Footer from './components/footer.jsx';
import {useAutoKeys} from 'react-easier';

function App() {
    useAutoKeys();
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
