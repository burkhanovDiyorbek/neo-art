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
			<section className="flex flex-col items-center justify-center py-[55px] mt-20" data-aos="zoom-in-up">
				<div className='container flex items-center justify-center gap-[53px] max-[1200px]:flex-wrap-reverse'>
					<Swiper pagination={true} modules={[Pagination]} className='max-w-[570px] w-full'>
						<SwiperSlide><img src="/guy_in_a_black_suit.webp" alt="" /></SwiperSlide>
						<SwiperSlide><img src="/2-silde.webp" alt="" /></SwiperSlide>
						<SwiperSlide><img src="/3-slide.webp" alt="" /></SwiperSlide>
					</Swiper>
					<div>
						<h2 className="text-[#333333] text-5xl font-bold  leading-[56px] mb-4 max-[500px]:text-[26px] max-[500px]:leading-[31px]">NeoArt – Sizning Baxtli Kuningiz Uchun</h2>
						<p className="mb-8 text-[#666666] text-lg font-normal leading-7 tracking-tight  max-[500px]:text-[14px]  max-[500px]:leading-[21px]">Maxsus kuningizni bizning tajribamizga ishonib topshiring. Mukammal va xursandchilikka to'la to'y marosimingiz uchun xizmatlarimizni buyurtma qiling.</p>

						<div className="flex gap-4">
							<Button text='Bog’lanish' icon='/icons/phone.svg' />
							<Button text='Video' icon='/icons/video.svg' />
						</div>
					</div>
				</div>
			</section>
			<section className='bg-[#879a7737] bg-[url("/public/about-section-bg.png")] bg-cover bg-no-repeat bg-center py-20 max-[500px]:py-10' data-aos="zoom-in" id='about'>
				<div className="container flex justify-between items-center gap-[53px] max-[1200px]:flex-wrap">
					<div className='max-w-[600px]'>
						<h2 className="text-[#333333] text-4xl font-semibold leading-[44px] mb-4 title max-[500px]:mb-2.5">Organizatsiyamiz haqida</h2>
						<p className="text-[#666666] text-lg font-normal leading-7 tracking-tight mb-4 max-[500px]:text-[14px] max-[500px]:leading-[21px] max-[500px]:mb-2.5">Bizning to‘y tashkiloti veb-saytimizga xush kelibsiz. Siz bilan hayotimizdagi eng muhim kunlardan birini nishonlashni intiqlik bilan kutmoqdamiz. Ushbu veb-sayt to‘yimizga oid barcha muhim tafsilotlarni qulay va interaktiv tarzda siz bilan baham ko‘rish uchun yaratildi. Samimiy e’tiboringiz va doimiy qo‘llab-quvvatlaganingiz uchun chuqur minnatdorchilik bildiramiz. Ushbu unutilmas kunda siz bilan birga bo‘lish biz uchun katta sharaf bo‘ladi va biz bu kunni birgalikda nishonlashni orziqib kutamiz.</p>
						<p className="text-[#666666] text-lg font-normal leading-7 tracking-tight mb-8 max-[500px]:text-[14px] max-[500px]:leading-[21px] max-[500px]:mb-4">NeoArt jamoasi 2019-yil 15-avgust kuni Ahmedjanov Samandar Rustamovich boshchiligida tashkil etilgan. Jamoamizning asosiy maqsadi — mijozlarimizning eng quvonchli kunlarini yanada go‘zal va esda qolarli tarzda o‘tkazishlariga xizmat ko‘rsatishdir. Hurmat bilan — NeoArt.</p>
						<Button text={'Buyurtma berish'} icon='/icons/order.svg' />
					</div>
					<img src="/man.webp" alt="" className='max-w-[538px] max-h-[558px] w-full h-full object-cover max-[500px]:max-h-[300px]' />

				</div>
			</section>
			<section className='py-20' data-aos="zoom-in-up">
				<div className="container">

				<iframe src="https://www.youtube.com/embed/QZqrIy1BdnA" title="Hayotingizdagi eng muhim kunni biz bilan unutilmas qilishingiz mumkin!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-full h-full min-h-[400px]'></iframe>
				</div>
			</section>

			<HomeServices />
			<ArtistsSlide />
			<ContactForm />
		</>
	)
}