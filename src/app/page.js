import Faq from '@/components/Faq'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import React from 'react'
import sandbox from "../Assets/Component-2.png"
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='w-full px-[5%] bg-[#050110]/[.89]'>
      <Header />
      <Hero />
      <div className="w-full">
      <Image src={sandbox} alt="sandbox" className="-mt-12 flex justify-center"/>
      </div>
      <Faq />
      <Footer />
    </div>
  )
}

export default HomePage