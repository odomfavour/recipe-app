import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper React components

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { recommendedRecipes } from '../../utils'

const RecommendedSwiper = () => {
    return (
        <section>
            <Swiper
                spaceBetween={8}
                slidesPerView={2}
                navigation
                autoplay
                modules={[Pagination, Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // when window width is <= 999px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    999: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                {recommendedRecipes.map(item => {
                    const { image, id, name, creator } = item
                    return (
                        <SwiperSlide key={id}>
                            <div className="px-[8px] py-[12px] bg-[#FDE4D3] rounded-[20px]">
                                <div>
                                    <img src={image} alt="" className='h-[80px] w-[120px] mx-auto rounded-[24px] object-cover'/>
                                </div>
                                <div className="text-center mt-[8px]">
                                    <p className='text-[12px] font-medium text-[#52290C] font-raleway mb-[8px]'>{name}</p>
                                    <p className=' text-[#52290C] font-raleway text-[10px] font-medium'>{creator}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default RecommendedSwiper
