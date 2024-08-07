import React, { useState } from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoes, statistics } from '../constants'
import { images } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
    const [bigShoeImg,setBigShoeImg]=useState(images.bigShoe3)

    return (
        <section id='home' className='w-full flex xl:flex-row sm:flex-row flex-col justify-center min-h-screen max-container'> 

            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection </p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:[72px]  font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Nike </span>Shoes
                </h1>
                <p className='text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm' >Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label="Shop now" iconURL={arrowRight} />

                <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16 ">
                    {statistics.map((stat, index) => (
                        <div key={stat.label}>
                            <p className='text-4xl font-palanquin font-bold leading-7 font-montserrat text-slate-gray' >{stat.value}</p>
                            <p className='leading-7 font-montserrat text-slate-gray mt-2'>{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
            {/* image section */}
            <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className='gap-6 object-contain relative z-10' />

                <div className='flex flex-row absolute  flex-1 sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%]'>
                    {
                        shoes.map((shoe) => (
                            <div key={shoe.imgURL}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                    bigShoeImg=""
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero