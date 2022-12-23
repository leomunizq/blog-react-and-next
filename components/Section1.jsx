import Image from 'next/image'
import Link from 'next/link'
import Author from './_child/author.jsx'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'

export default function section1() {
  SwiperCore.use([Autoplay])

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: 'right'
  }
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          //  autoplay={{ delay: 2000 }}
          // loop={true}
        >
          <SwiperSlide> {slide()}</SwiperSlide>
          <SwiperSlide> {slide()}</SwiperSlide>
          <SwiperSlide> {slide()}</SwiperSlide>
          <SwiperSlide> {slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

function slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={'/'} legacyBehavior>
          <a>
            <Image
              src={'/images/img1.jpg'}
              width={600}
              height={600}
              alt="image"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
