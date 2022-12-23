import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

export default function Section2() {
  return (
    <section className="container mx:auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
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
              className="rounded"
              width={500}
              height={350}
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
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
