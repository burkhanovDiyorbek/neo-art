import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
export const ArtistsSlide = () => {
	return <section className='artists-silde pt-10'>
		<div className="container">
			<div>

				<h2 className='title'>Sanatkorlar</h2>
			</div>
			<Swiper pagination={true} slidesPerView={4} modules={[Pagination]} className=' w-full'
			breakpoints={{
				320: { slidesPerView: 1, spaceBetween: 20 },
				640: { slidesPerView: 2, spaceBetween: 20 },
				1024: { slidesPerView: 3, spaceBetween: 30 },
				1280: { slidesPerView: 4, spaceBetween: 40 },
			}}
		style={
			{
				"--swiper-pagination-color": "#879A77", // active bullet rangi (yashilga yaqin)
				"--swiper-pagination-bullet-inactive-color": "#879A77", // inactive border rangi
				"--swiper-pagination-bullet-inactive-opacity": "1", // to‘liq ko‘rinadigan qilish
				"--swiper-pagination-bullet-size": "40px", // to‘rtburchak bo‘lishi uchun width ni heightdan ko‘proq qilamiz pastda
				"--swiper-pagination-bullet-horizontal-gap": "8px", // bulletlar orasidagi masofa
			} as React.CSSProperties
		}>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
				<SwiperSlide>
					<Card name='Sanatkor 1' price='100$' imageUrl='/public/artist-1.webp'/>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
}

export const Card = ({name,price,imageUrl}:{name:string;price:string;imageUrl:string})=>{
	return <div className='py-6 px-4 shadow-[0px_4px_6px_0px_#00000010] border border-[#D1D1D1] bg-[#F5F5F5] max-w-[276px] text-center'>
		<img src={imageUrl} alt="" className='mb-4'/>
		<h3 className='text-[#333333] text-2xl font-semibold leading-[28px] mb-4'>{name}</h3>
		<p className='text-[#666666] text-lg font-normal tracking-tight mb-4'>{price}</p>
	</div>
}