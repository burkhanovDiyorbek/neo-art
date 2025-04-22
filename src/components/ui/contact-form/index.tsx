import { Button } from '../../shared'

export const ContactForm = () => {
	return <section className="bg-[#F5F5F5] py-20 px-10 max-[500px]:px-0 max-[500px]:py-10">
		<div className="container flex items-center justify-center gap-[53px] max-[1200px]:flex-wrap-reverse py-20 max-[500px]:py-10">
			<img src="/contact-phones.webp" alt="" />
			<div className='max-w-[500px] w-full'>
				<h2 className="text-[#333333] text-4xl font-semibold leading-[44px] mb-4 title">Biz bilan bog'laning</h2>
				<p className="text-[#666666] text-lg font-normal leading-7 tracking-tight mb-8">Savollaringiz, takliflaringiz yoki hamkorlik bo‘yicha murojaatlaringizni kutamiz. Aloqaga chiqish uchun quyidagi formani to‘ldiring yoki bizga to‘g‘ridan-to‘g‘ri yozing.</p>
				<form action="" className='flex flex-col gap-4 items-start'>
					<input type="text" placeholder='Ism' className='border-b border-[#888888] px-4 py-3 outline-none w-full' />
					<input type="text" placeholder='Telefon raqam' className='border-b border-[#888888]  px-4 py-3 outline-none w-full' />
					<Button text='Yuborish' icon='/icons/send.svg' />
				</form>
			</div>
		</div>
	</section>
}