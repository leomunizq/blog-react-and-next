import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'
import fetcher from '../lib/fetcher'
import Spinner from './_child/Spinner'
import Error from './_child/Error'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export default function section3() {
  const { data, isLoading, isError } = fetcher('api/popular')

  if (isLoading) return <Spinner></Spinner>
  if (isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper
        slidesPerView={2}
        //  autoplay={{ delay: 2000 }}
        // loop={true}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function Post({ data }) {
  const { id, title, category, img, published, author, description } = data
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a>
            <Image
              src={img || 'images/img1.jpg'}
              width={600}
              height={40}
              alt="image"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
              {category || 'unknown category'}
            </a>
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600">
              {' '}
              - {published || 'unknown date'}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600">
              {title || 'unknown title'}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
        {author ? <Author></Author> : <></>}
      </div>
    </div>
  )
}
