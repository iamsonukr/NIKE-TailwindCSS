import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handelClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'boreder-transparent'} cursor-pointer flex flex-row `} onClick={handelClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 flex-row'>
                <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain' />
            </div>
        </div>
    )
}

export default ShoeCard