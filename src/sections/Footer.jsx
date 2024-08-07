import React from 'react'
import { images } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className="max-container p-10">
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="">
            <img src={images.footerLogo} alt="" width={150} height={50}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready from the nearest nikee store</p>
          <div className='flex items-center gap-5 mt-8 '>
            {
              socialMedia.map((icon)=>(
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img src={icon.src} alt="icon" width={24} height={24} />
                </div>
              ))
            }

          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {
            footerLinks.map((section)=>(
              <div link={section.title}>
                <h4 className='text-white text-2xl leadin-normal font-montserrat font-medium'>{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li className='text-white-400 mt-3 text-base hover:text-slate-gray ' key={link.name}><a href="">{link.name}</a></li>
                  ))}
                </ul>
              </div>
            ))
          }

        </div>

        


      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img src={copyrightSign} alt="copuright" width={20} height={20} className='rounded-full'/>
            <p>Copyright. All rights reserved. </p>

          </div>
          <p className='font-montserrat cursor-pointer'>Terms and Conditions</p>

        </div>
    </footer>
  )
}

export default Footer