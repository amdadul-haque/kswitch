import React from 'react'
import MyContainer from './MyContainer'
import Image from 'next/image'
import Button from './Button'
import { fajalla } from './utils'

const Systems = () => {
  return (
    <MyContainer className='py-10'>
      <h1 className={`text-[44px] md:text-[62px] tracking-tight font-bold text-brand leading-none text-center mt-10 ${fajalla.className}`}>Our Systems</h1>
      <div className='h-[2px] w-20 bg-gray-700 mx-auto my-8 md:my-16'></div>
      <div className='flex flex-col md:flex-row md:justify-between '>
        <div className='w-full'>
          <Image src='/system.webp' width={500} height={500} alt='system' />
        </div>
        <div className='w-full flex flex-col gap-6 items-center justify-center'>
          <h3 className='text-[22px] text-center'>Simple-Switch Immobilizer</h3>
          <p className='text-center max-w-[550px] text-white-off'>The basic switch is installed in a hidden area where the owner chooses. A switch can also be placed in the vehicle that is seamless with the vehicles original buttons. When the button is switched, the vehicle will not start. Remote starters will not work as expected when button is switched.</p>
          <Button link='/get-a-quote' >Request A Quote</Button>
        </div>
      </div>
    </MyContainer>
  )
}

export default Systems
