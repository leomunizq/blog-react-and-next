import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper
        slidesPerView={2}
        //  autoplay={{ delay: 2000 }}
        // loop={true}
      >
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
        <SwiperSlide> {Post()}</SwiperSlide>
      </Swiper>
    </section>
  )
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={'/'} legacyBehavior>
          <a>
            <Image
              src={'/images/img1.jpg'}
              width={600}
              height={40}
              alt="image"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={'/'} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href={'/'} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600"> -July 3, 2014</a>
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} legacyBehavior>
            <a className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600">
              title lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
        <Author />
      </div>
    </div>
  )
}
