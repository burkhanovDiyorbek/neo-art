import { Button } from '../../components/shared'
// import  Pagination  from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { ArtistsSlide, ContactForm, HomeServices } from '../../components/ui'
export const Home = () => {
	return (
		<>
			<section className="flex flex-col items-center justify-center h-screen" data-aos="zoom-in-up">
				<div className='container flex items-center justify-center gap-[53px] max-[1200px]:flex-wrap'>
					<Swiper pagination={true} modules={[Pagination]} className='max-w-[570px] w-full'>
						<SwiperSlide><img src="/guy_in_a_black_suit.webp" alt="" /></SwiperSlide>
						<SwiperSlide><img src="/guy_in_a_black_suit.webp" alt="" /></SwiperSlide>
						<SwiperSlide><img src="/guy_in_a_black_suit.webp" alt="" /></SwiperSlide>
					</Swiper>
					<div>
						<h2 className="text-[#333333] text-5xl font-bold  leading-[56px] mb-4">NeoArt – Sizning Baxtli Kuningiz Uchun</h2>
						<p className="mb-8 text-[#666666] text-lg font-normal leading-7 tracking-tight">Maxsus kuningizni bizning tajribamizga ishonib topshiring. Mukammal va xursandchilikka to'la to'y marosimingiz uchun xizmatlarimizni buyurtma qiling.</p>

						<div className="flex gap-4">
							<Button text='Bog’lanish' icon='/public/icons/phone.svg' />
							<Button text='Video' icon='/public/icons/video.svg' />
						</div>
					</div>
				</div>
			</section>
			<section className='bg-[#879a7737] bg-[url("/public/about-section-bg.png")] bg-cover bg-no-repeat bg-center py-20' data-aos="zoom-in" id='about'>
				<div className="container flex justify-between items-center gap-[53px] max-[1200px]:flex-wrap">
					<div>
						<h2 className="text-[#333333] text-4xl font-semibold leading-[44px] mb-4 title">Organizatsiyamiz haqida</h2>
						<p className="text-[#666666] text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7 tracking-tight mb-4">Bizning to‘y tashkiloti veb-saytimizga xush kelibsiz. Siz bilan hayotimizdagi eng muhim kunlardan birini nishonlashni intiqlik bilan kutmoqdamiz. Ushbu veb-sayt to‘yimizga oid barcha muhim tafsilotlarni qulay va interaktiv tarzda siz bilan baham ko‘rish uchun yaratildi. Samimiy e’tiboringiz va doimiy qo‘llab-quvvatlaganingiz uchun chuqur minnatdorchilik bildiramiz. Ushbu unutilmas kunda siz bilan birga bo‘lish biz uchun katta sharaf bo‘ladi va biz bu kunni birgalikda nishonlashni orziqib kutamiz.</p>
						<p className="text-[#666666] text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7 tracking-tight mb-8">NeoArt jamoasi 2019-yil 15-avgust kuni Ahmedjanov Samandar Rustamovich boshchiligida tashkil etilgan. Jamoamizning asosiy maqsadi — mijozlarimizning eng quvonchli kunlarini yanada go‘zal va esda qolarli tarzda o‘tkazishlariga xizmat ko‘rsatishdir. Hurmat bilan — NeoArt.</p>
						<Button text={'Buyurtma berish'} icon='/public/icons/order.svg' />
					</div>
					<img src="/man.webp" alt="" />

				</div>
			</section>
			<HomeServices />
			<ArtistsSlide />
			<ContactForm />
		</>
	)
}