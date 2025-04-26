import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { artistsData, groupsData, startersData } from '../../../mocks'

export const ArtistsSlide = () => {
  const [selectedCategory, setSelectedCategory] = useState('Boshlovchilar')

  const getDataByCategory = () => {
    switch (selectedCategory) {
      case 'San\'atkorlar':
        return artistsData
      case 'Guruhlar':
        return groupsData
      case 'Boshlovchilar':
      default:
        return startersData
    }
  }

  const dataToShow = getDataByCategory()

  return (
    <section className='artists-silde pt-10'>
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className='title !mb-0 text-3xl'>{selectedCategory}</h2>

          <label id="lbl-main-menu-mob" className='hidden'>Select Item</label>

          {/* Dropdown */}
          <select
            className="border-b border-[#879A77] font-bold px-4 py-2 text-[#879A77] focus:outline-none max-[500px]:max-w-[100px] max-[500px]:text-[12px] max-[500px]:font-bold max-[500px]:py-1 max-[500px]:px-0"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-labelledby="lbl-main-menu-mob"
          >
            <option value="San'atkorlar">San'atkorlar</option>
            <option value="Guruhlar">Guruhlar</option>
            <option value="Boshlovchilar">Boshlovchilar</option>
          </select>
        </div>

        <Swiper
          pagination={true}
          slidesPerView={4}
          modules={[Pagination]}
          className='w-full max-[500px]:mb-10'
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 20 },
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
          }
        >
          {dataToShow.map((item, index) => (
            <SwiperSlide key={index}>
              <Card name={item.name} price={item.price} imageUrl={item.imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export const Card = ({ name, price, imageUrl }: { name: string; price: string; imageUrl: string }) => {
  return (
    <div className='py-6 px-4 shadow-[0px_4px_6px_0px_#00000010] border border-[#D1D1D1] bg-[#F5F5F5] min-[500px]:max-w-[276px] w-full text-center hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out'>
      <img src={imageUrl} alt={name} className='mb-4 w-full' />
      <h3 className='text-[#333333] text-[20px] font-semibold leading-[28px] mb-4'>{name}</h3>
      <p className='text-[#666666] text-lg font-normal tracking-tight mb-4'>Narx: {price}</p>
    </div>
  )
}
