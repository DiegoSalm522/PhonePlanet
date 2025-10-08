import { BiChevronRight, BiSolidPlanet } from "react-icons/bi";
import { Link } from "react-router-dom"
import { socialLinks } from "../../constants/links";

const Footer = () => {
  return (
    <footer className="py-10 text-slate-200 bg-gray-950 px-12 flex justify-between gap-10 text-sm flex-wrap md:flex-nowrap">
      {/* LOGO */}
      <Link to='/' className="flex text-2xl font-bold tracking-tighter transition-all text-white flex-1">
        <span className="text-cyan-600">Phone</span>
        <BiSolidPlanet size={30}/>
        Planet
      </Link>
      {/* SUBSCRIBE */}
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter text-lg">
          Subscribe Now
        </p>
        <p className="text-sm font-medium">
          Get exclusive offers
        </p>
        <div className="border border-gray-800 flex flex-row items-center gap-2 px-3 py-2 rounded-full">
          <input 
            type="email"
            placeholder="Your email"
            className="pl-2 bg-gray-950 text-slate-200 w-full focus:outline-none"
          />
          <button>
            <BiChevronRight size={20}/>
          </button>
        </div>
      </div>
      {/* POLITICS */}
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter text-lg">
          Politics
        </p>
        <nav className="flex flex-col gap-2 text-xs font-medium">
          <Link to='#' className="text-slate-300 hover:text-white text-sm">Privacy Policy</Link>
          <Link to='#' className="text-slate-300 hover:text-white text-sm">Terms of Use</Link>
        </nav>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="flex flex-col gap-4 flex-1">
        <p className="font-semibold uppercase tracking-tighter text-lg">
          Follow Us
        </p>
        <div className="flex">
          {socialLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="text-slate-300 border border-gray-8000 w-full h-full py-3.5 flex items-center justify-center transition-all hover:bg-white hover:text-gray-950"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer;