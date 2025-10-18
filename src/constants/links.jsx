import {FaFacebookF, FaInstagram, FaTiktok, FaXTwitter} from "react-icons/fa6";

export const navbarLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Shop",
    href: "/products",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
]

export const socialLinks = [
	{
		id: 1,
		title: "Facebook",
		href: "https://www.facebook.com",
		icon: <FaFacebookF size={18}/>,
	},
	{
		id: 2,
		title: "Twitter",
		href: "https://www.twitter.com",
		icon: <FaXTwitter size={18}/>,
	},
	{
		id: 3,
		title: "Instagram",
		href: "https://www.instagram.com",
		icon: <FaInstagram size={18}/>,
	},
	{
		id: 4,
		title: "Tiktok",
		href: "https://www.tiktok.com",
		icon: <FaTiktok size={18}/>,
	},
]