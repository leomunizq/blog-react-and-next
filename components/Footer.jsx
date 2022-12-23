import React from 'react'
import Link from 'next/link'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import Newsletter from './_child/Newsletter'

export default function footer() {
  return (
    <footer className="bg-gray-50">
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href="/" legacyBehavior>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            © 2022 All Rights Reserved. Designed by' You know'
          </p>
          <p className="py-5 text-gray-400 text-center">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  )
}
