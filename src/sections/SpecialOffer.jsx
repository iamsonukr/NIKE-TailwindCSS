import React from 'react'
import { images } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 ma-container'>
      {/* image */}

      <div className="flex-1">
        <img src={images.offer} width={773} height={687} className='object-contain w-full' alt="" />
      </div>

      {/* text */}
      <div className="flex-1">
        <h1 className='mt-10 font-palanquin text-4xl max-sm:[72px]  font-bold inline-block'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 '>Special </span>

          <span className='text-coral-red inline-block mt-3'> Offer</span> 
        </h1>
        <p className='text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm' >Discover stylish Nike arrivals, quality comfort, and innovation for your active life. Ensure premium confort and </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" iconURL={arrowRight} />
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer