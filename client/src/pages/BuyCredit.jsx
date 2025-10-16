import React from 'react'
import { plans, assets } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-3xl text-center font-medium mb-6 sm:mb-10'>Choose the plan</h1>


      <div>
        {plans.map((item, index) => (
          <div key={index}>
            <img src={assets.logo_icon} alt="logo" />
            <p>{item.id}</p>
            <p>{item.desc}</p>
            <p>${item.price}/{item.credits} credits</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
