import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
    return (
        <div>
            <div className='relative'>
                <img src={assets.sample_img_1} alt="alien" className='max-w-sm rounded' />
                <span className='absolute bottom-0 left-0 bg-blue-500 w-full transition-all h-1 duration-[10]' />
            </div>
        </div>
    )
}

export default Result
