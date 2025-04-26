import { NavLink } from 'react-router-dom'
import logo from '/icons/logo.svg'
import instagram from '/icons/instagram.svg'
import telegram from '/icons/telegram.svg'
import youtube from '/icons/youtube.svg'
import phone from '/icons/phone-d.svg'
import location from '/icons/location.svg'

export const Footer = () => {
	const navItems1 = [
		{ label: 'Asosiy sahifa', to: '/' },
		{ label: 'Biz haqimizda', to: '/' },
		{ label: 'Xizmatlar', to: '/services/artists' },
	]

	const navItems2 = [
		{ label: 'San’atkorlar', to: '/services/artists' },
		{ label: 'Yetakchilar', to: '/services/starter' },
		{ label: 'Guruhlar', to: '/services/groups' },
	]

	const socialIcons = [
		{ href: 'https://www.instagram.com/neoart_wedding', icon: instagram, alt: 'Instagram' },
		{ href: 'https://t.me/neoart_wedding', icon: telegram, alt: 'Telegram' },
		{ href: 'http://www.youtube.com/@NeoartWedding', icon: youtube, alt: 'YouTube' },
	]

	return (
		<footer className="py-4 min-[100px]:py-10">
			<div className="container mx-auto text-center">
				<div className="flex justify-between items-start border-b border-[#D1D1D1] pb-10 mb-10 flex-wrap gap-8 max-[500px]:justify-center max-[500px]:flex-col max-[500px]:items-center">
					<div className="max-w-[500px] w-full text-left flex flex-col gap-4 max-[500px]:gap-2.5 max-[500px]:items-center">
						<NavLink to='/' className="mb-4 block w-40 h-auto max-[500px]:text-center  max-[500px]:w-25  max-[500px]:h-8  max-[500px]:pb-4 ">
							<img src={logo} alt="Logo" className="w-40 h-auto  max-[500px]:mx-auto" />
						</NavLink>

						<ul className="flex gap-3">
							{socialIcons.map((item, index) => (
								<li key={index}>
								<a key={index} href={item.href} className="hover:opacity-70 transition">
									<img src={item.icon} alt={item.alt} className="w-6 h-6" />
								</a>
								</li>
							))}
						</ul>
					</div>

					<ul className="flex gap-4 max-[500px]:gap-2.5 flex-col max-[500px]:items-center">
						{navItems1.map((item, index) => (
							<li key={index}>

							<NavLink to={item.to} className="text-[18px] max-[500px]:text-[14px] text-[#333] font-medium  max-[500px]:self-center self-start hover:text-[#879A77]  max-[500px]:text-center">
								{item.label}
							</NavLink>
							</li>
						))}
					</ul>

					<ul className="flex gap-4 max-[500px]:gap-2.5 flex-col self-start  max-[500px]:items-center max-[500px]:self-center">
						{navItems2.map((item, index) => (
							<li key={index}>

							<NavLink key={index} to={item.to} className="text-[18px] max-[500px]:text-[14px] text-[#333] font-medium  max-[500px]:self-center self-start hover-text-[#879A77]  max-[500px]:text-center">
								{item.label}
							</NavLink>
							</li>
						))}
					</ul>

					<ul className="flex gap-4 max-[500px]:gap-2.5 flex-col self-start max-[500px]:self-center max-[500px]:items-center">
						<li>

						<a href="tel:+998931274444" className="text-[18px] max-[500px]:text-[14px] text-[#333] font-medium flex gap-2 items-center">
							<img src={phone} alt="Phone" className="w-6 h-6" />
							<span>+998 93 127-44-44</span>
						</a>
						</li>
						<li>

						<a href="https://maps.google.com" className="text-[18px] max-[500px]:text-[14px] text-[#333] font-medium flex gap-2 items-center">
							<img src={location} alt="Location" className="w-6 h-6" />
							<span>Toshkent, Yunusobod</span>
						</a>
						</li>
					</ul>
				</div>

				<div className="flex justify-between items-center gap-4 max-[500px]:gap-2.5 flex-wrap max-[500px]:text-[13px] max-[500px]:text-center max-[500px]:flex-col max-[500px]:items-center">

					<p>NeoArt Wedding — To‘yingizga nafislik bag‘ishlaymiz.</p>

					<p>© {new Date().getFullYear()} Neoart Wedding, All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	)
}
