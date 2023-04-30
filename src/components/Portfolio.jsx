import Image from 'next/image'
import React from 'react'

export default function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold pb-6'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 md:gap-4 auto-rows-[200px]'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                    src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
                    alt='/'
                    width='680'
                    height='460'
                    className='w-full h-full'
                    style={{objectFit:'cover'}}
                />
            </div>
            {/* 
                <Image src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80'
                    alt='/'
                    width='215'
                    height='217'
                    className='w-full h-full'
                    style={{objectFit:'cover'}}
                />
           */}
           
            <Image src='https://images.unsplash.com/photo-1622358419959-ebc473739690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
                alt='/'
                width='215'
                height='217'
                className='w-full h-full'
                style={{objectFit:'cover'}}
            />
    
        
            <Image src='https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
                alt='/'
                width='215'
                height='217'
                className='w-full h-full'
                style={{objectFit:'cover'}}
            />
        
            <Image src='https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
                alt='/'
                width='215'
                height='217'
                className='w-full h-full'
                style={{objectFit:'cover'}}
            />
        
            <Image src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
                alt='/'
                width='215'
                height='217'
                className='w-full h-full'
                style={{objectFit:'cover'}}
            />
           
        </div>
    </div>
  )
}
