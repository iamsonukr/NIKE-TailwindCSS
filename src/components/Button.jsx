import React from 'react'

const Button = ({label,iconURL,backgroundColor, textColor, borderColor,fullwidht}) => {
  return (
    <button className={`border fonr-montserrat text-lg leading-none  flex hover:bg-tran bg-coral-red border-coral-red px-7 py-4 rounded-full ${backgroundColor?`${backgroundColor} ${textColor} ${borderColor}`: `bg-coral-red border-coral-red`}
     text-black justify-center items-center gap-4 ${fullwidht && 'w-full'}`}>
        {label} 
        <img src={iconURL} alt="" className='ml-2 rounded-full w-5 h-5' />
    </button>
  )
}

export default Button