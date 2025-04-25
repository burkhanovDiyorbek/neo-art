import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"


export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	// Scroll qilish funksiyasi
	const scrollToSection = (id: string) => {
		if (location.pathname !== "/") {
			navigate("/")
			setTimeout(() => {
				const section = document.getElementById(id)
				if (section) {
					section.scrollIntoView({ behavior: "smooth" })
				}
			}, 100)
		} else {
			const section = document.getElementById(id)
			if (section) {
				section.scrollIntoView({ behavior: "smooth" })
			}
		}
		setMenuOpen(false)
	}

	const isActive = (path: string) => {
		return location.pathname === path
			? "text-[#879A77] border-b-1 text-[18px] font-[500]"
			: "text-[#333] text-[18px] font-[500] hover:text-[#879A77] border-b-1 border-[#fff] transition-all duration-300 ease-in-out"
	}

	return (
		<nav className="border-b border-[#D1D1D1] fixed top-0 w-full z-50 backdrop-blur-xl" data-aos="zoom-in">
			<div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
				<a href="/" className="text-lg font-bold">
					<img src="/icons/logo.svg" alt="logo" />
				</a>

				{/* Burger icon */}
				<div className="md:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Desktop menu */}
				<ul className="hidden md:flex space-x-4 gap-7 items-center">
					<NavLink to="/" className={isActive("/")}>Asosiy Sahifa</NavLink>

					{/* Scroll to #about */}
					<button
						onClick={() => scrollToSection("about")}
						className="text-[#333] text-[18px] font-[500] hover:text-[#879A77]  border-b-1 border-transparent hover:!border-[#879a77] transition-all duration-300 ease-in-out"
					>
						Biz haqimizda
					</button>

					{/* Dropdown */}
					<li className="relative group cursor-pointer">
						<div className='flex gap-1'>
							<span className="text-[#333] text-[18px] font-[500] hover:text-[#879A77] transition-all duration-300 ease-in-out ">
								Servislar
							</span>
							<img src="/icons/arrowdown.svg" className='group-hover:rotate-180 transition-all duration-300' />
						</div>
						<div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-2 z-10 w-40 hidden group-hover:block">
							<NavLink to="/services/artists" className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#333]">San'atkorlar</NavLink>
							<NavLink to="/services/starter" className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#333]">Boshlovchilar</NavLink>
							<NavLink to="/services/groups" className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#333]">Guruhlar</NavLink>
						</div>
					</li>

					<a href="tel:+998931274444" className="text-[#333] text-[18px] font-[500] hover:text-[#879A77]  border-b-1 border-transparent hover:!border-[#879a77] transition-all duration-300 ease-in-out">Aloqa</a>
				</ul>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden bg-white w-full shadow-md px-4 py-6 absolute top-full left-0 h-screen z-50">
					<ul className="flex flex-col space-y-4 items-center text-center">
						<NavLink to="/" className={isActive("/")} onClick={() => setMenuOpen(false)}>Asosiy Sahifa</NavLink>

						{/* Scroll to #about */}
						<button
							onClick={() => scrollToSection("about")}
							className="text-left text-[#333] text-[18px] font-[500] hover:text-[#879A77]"
						>
							Biz haqimizda
						</button>

						<div>
							<ul className="ml-2 text-[#333] text-[18px] font-[500]">
								<NavLink to="/services/artists" className="block mb-4 text-[#333]" onClick={() => setMenuOpen(false)}>San'atkorlar</NavLink>
								<NavLink to="/services/starter" className="block mb-4 text-[#333]" onClick={() => setMenuOpen(false)}>Boshlovchilar</NavLink>
								<NavLink to="/services/groups" className="block text-[#333]" onClick={() => setMenuOpen(false)}>Guruhlar</NavLink>
							</ul>
						</div>

						<a href="tel:+998931274444" className="text-[18px] text-[#333] font-[500] hover:text-[#879A77]">Aloqa</a>
					</ul>
				</div>
			)}
		</nav>
	)
}
