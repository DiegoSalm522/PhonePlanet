import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import Banner from "../components/home/Banner";

const RootLayout = () => {
  const { pathname } = useLocation();
  
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      {pathname === '/' && <Banner/>}
      <main className='container my-8 flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout