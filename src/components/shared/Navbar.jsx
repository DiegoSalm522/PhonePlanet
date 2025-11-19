import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navbarLinks } from "../../constants/links"
import { FaBars, FaCartShopping} from "react-icons/fa6"
import { BiSolidPlanet } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import { useCart } from "../cart/CartContext"

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const { getTotalItems, toggleCart } = useCart()
  
  const toggleMenu = () => {
    setisOpen(!isOpen)
  }
  const closeMenu = () => {
    setisOpen(false)
  }

  const totalItems = getTotalItems()

  return (
    <>
      <header className="relative bg-black text-white py-5 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-tighter transition-all">
          <p className="hidden md:flex">
            <span className="text-cyan-600">Phone</span>
            <BiSolidPlanet size={30}/>
            <span>Planet</span>
          </p>
          <p className="flex text-4xl md:hidden">
            <span className="text-cyan-600 -skew-x-6">P</span>
            <BiSolidPlanet size={40}/>
            <span className="-skew-x-6">P</span>
          </p>
        </Link>
        {/* PAGES */}
        <nav className="space-x-5 hidden md:flex absolute left-1/2 -translate-x-1/2">
          {navbarLinks.map(link => (
            <NavLink
              key={link.id}
              to={link.href}
              className={({isActive}) =>
                `${isActive? "text-cyan-600" : ""} text-xl transition-all duration-300 font-bold hover:text-cyan-600`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
        {/* ICONS */}
        <div className="flex gap-5 items-center">
          <button className="relative hover:text-cyan-600 transition-all duration-300" onClick={toggleCart}>
            {totalItems > 0 && (
              <span className="absolute bottom-5 -right-2 w-5 h-5 grid place-items-center bg-red-600 text-white text-xs rounded-full">
                {totalItems}
              </span>
            )}
            <FaCartShopping size={30}/>
          </button>
          <button className="md:hidden hover:text-cyan-600 transition-all duration-300" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={25}/> : <FaBars size={25}/>}
          </button>
        </div>
      </header>
      {/* MENU MOBILE */}
      <div className={`md:hidden fixed top-[88px] left-0 w-full bg-black text-white transition-all duration-300 ease-in-out z-50 
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <nav className="flex flex-col py-4 items-center">
          {navbarLinks.map(link => (
            <NavLink
              key={link.id}
              to={link.href}
              onClick={closeMenu}
              className={({isActive}) =>
                `${isActive? "text-cyan-600" : ""} text-xl font-bold hover:text-cyan-600 px-5 py-4 transition-all duration-300`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-[88px]" 
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Navbar