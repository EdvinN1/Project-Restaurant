import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/footer.jsx';
import { useStates, useAutoKeys, useDebug } from 'react-easier';
import { GlobalProvider } from './GlobalContext';
import { useEffect } from 'react';

function App() {
  useAutoKeys();
  useDebug();
  useStates("access", {
    admin: false,
    loggedIn: false
  })
  useStates("cart", [])
  const access = useStates("access")
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn) {
      const admin = sessionStorage.getItem("admin") === "true";
      access.admin = admin;
      access.loggedIn = loggedIn;
    }
  }, [])

  return (
    <GlobalProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </GlobalProvider>
  )
}

export default App;
