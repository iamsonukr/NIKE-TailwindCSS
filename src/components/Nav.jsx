import React from 'react'
import {navLinks} from '../constants/index'
import {images} from '../assets/images'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container ' >
            <a href="/">
            <img src={images.headerLogo} alt="logo" width={130} height={30} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {
              navLinks.map((item)=>(
                <li className='font-montserrat text-lg text-slate-gray' key={item.label} > 
                <a href={item.href}>{item.label}</a> 
                </li>
              ))
            }
              
            </ul>
            <div className='hidden max-lg:block'>
              <img src={images.hamburger } alt="" height={25} width={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav