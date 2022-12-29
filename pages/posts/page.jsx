import React from 'react'
import Format from '../../layout/format'
import Author from '../../components/_child/author'
import Image from 'next/image'
import Related from '../../components/_child/Related'

export default function page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            title Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam
          </h1>
          <p className="text-gray-500 text-xl text-center">
            sub-title Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam
          </p>

          <div className="py-10">
            <Image src={'/images/img1.jpg'} width={900} height={600}></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  )
}
