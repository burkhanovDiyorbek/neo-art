import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { artistsData } from '../../../mocks'
export const ArtistsSlide = () => {
	return <section className='artists-silde pt-10'>
		<div className="container">
			<div>
				<h2 className='title'>Sanatkorlar</h2>
			</div>
			<Swiper pagination={true} slidesPerView={4} modules={[Pagination]} className='w-full'
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 20 },
					640: { slidesPerView: 2, spaceBetween: 20 },
					1024: { slidesPerView: 3, spaceBetween: 30 },
					1280: { slidesPerView: 4, spaceBetween: 40 },
				}}
				style={
					{
						"--swiper-pagination-color": "#879A77",
						"--swiper-pagination-bullet-inactive-color": "#879A77",
						"--swiper-pagination-bullet-inactive-opacity": "1",
						"--swiper-pagination-bullet-size": "40px",
						"--swiper-pagination-bullet-horizontal-gap": "8px",
					} as React.CSSProperties
				}>
				{artistsData.map((item, index) => {
					return index < 5 && <SwiperSlide key={index}>
						<Card name={item.name} price={item.price} imageUrl={item.imageUrl} />
					</SwiperSlide>
				})}
			</Swiper>
		</div>
	</section>
}

export const Card = ({ name, price, imageUrl }: { name: string; price: string; imageUrl: string }) => {
	return <div className='py-6 px-4 shadow-[0px_4px_6px_0px_#00000010] border border-[#D1D1D1] bg-[#F5F5F5] min-[500px]:max-w-[276px] w-full text-center'>
		<img src={imageUrl} alt="" className='mb-4 w-full' />
		<h3 className='text-[#333333] text-[20px] font-semibold leading-[28px] mb-4'>{name}</h3>
		<p className='text-[#666666] text-lg font-normal tracking-tight mb-4'>Narx: {price}</p>
	</div>
}