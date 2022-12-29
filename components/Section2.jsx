import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'
import getPost from '../lib/helper'
import fetcher from '../lib/fetcher'
import Spinner from './_child/Spinner'
import Error from './_child/Error'

export default function Section2() {
  const { data, isLoading, isError } = fetcher('api/posts')

  if (isLoading) return <Spinner></Spinner>
  if (isError) return <Error></Error>

  return (
    <section className="container mx:auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post data={value} key={index} />
        ))}
      </div>
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
              src={img || '/images/1.jpg'}
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
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
              {category || 'unknown'}
            </a>
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-600">
              {' '}
              - {published || 'unknown'}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || 'unknown'}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        {author ? <Author></Author> : <></>}
      </div>
    </div>
  )
}
