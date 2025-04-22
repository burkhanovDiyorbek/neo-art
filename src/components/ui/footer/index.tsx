import { NavLink } from 'react-router-dom'
import logo from '/icons/logo.svg'
import instagram from '/icons/instagram.svg'
import telegram from '/icons/telegram.svg'
import youtube from '/icons/youtube.svg'
import phone from '/icons/phone.svg'
import location from '/icons/location.svg'

export const Footer = () => {
	const navItems1 = [
		{ label: 'Asosiy sahifa', to: '/' },
		{ label: 'Biz haqimizda', to: '/about' },
		{ label: 'Xizmatlar', to: '/services' },
		{ label: 'Yangiliklar', to: '/news' },
	]

	const navItems2 = [
		{ label: 'Bog‘lanish', to: '/contact' },
		{ label: 'FAQ', to: '/faq' },
		{ label: 'Yordam', to: '/help' },
		{ label: 'Foydalanish shartlari', to: '/terms' },
	]

	const socialIcons = [
		{ href: '#', icon: instagram, alt: 'Instagram' },
		{ href: '#', icon: telegram, alt: 'Telegram' },
		{ href: '#', icon: youtube, alt: 'YouTube' },
	]

	return (
		<footer className="py-4">
			<div className="container mx-auto text-center">
				<div className="flex justify-between items-start border-b border-[#D1D1D1] pb-10 mb-10 flex-wrap gap-8">
					<div className="max-w-[500px] w-full text-left">
						<NavLink to='/' className="mb-4 block w-40 h-auto">
							<img src={logo} alt="Logo" className="w-40 h-auto" />
						</NavLink>

						<div className="flex gap-3">
							{socialIcons.map((item, index) => (
								<a key={index} href={item.href} className="hover:opacity-70 transition">
									<img src={item.icon} alt={item.alt} className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>

					<ul className="flex gap-4 flex-col">
						{navItems1.map((item, index) => (
							<NavLink key={index} to={item.to} className="text-[18px] text-[#333] font-medium">
								{item.label}
							</NavLink>
						))}
					</ul>

					<ul className="flex gap-4 flex-col self-start">
						{navItems2.map((item, index) => (
							<NavLink key={index} to={item.to} className="text-[18px] text-[#333] font-medium">
								{item.label}
							</NavLink>
						))}
					</ul>

					<ul className="flex gap-4 flex-col self-start">
						<a href="tel:+998931274444" className="text-[18px] text-[#333] font-medium flex gap-2 items-center">
							<img src={phone} alt="Phone" className="w-5 h-5" />
							<span>+998 93 127-44-44</span>
						</a>
						<a href="https://maps.google.com" className="text-[18px] text-[#333] font-medium flex gap-2 items-center">
							<img src={location} alt="Location" className="w-5 h-5" />
							<span>Qarshi, O‘zbekiston</span>
						</a>
					</ul>
				</div>

				<p className="text-[#888] text-sm">&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan</p>
			</div>
		</footer>
	)
}
