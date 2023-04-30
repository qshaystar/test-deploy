import React, { useState } from 'react'
import Image from 'next/image'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLen = SliderData.length;
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLen -1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLen - 1 : currentSlide - 1);
    }

    //不確定這行用意 
    if(!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }


  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
            return (
                <div key={index}
                    className={index === currentSlide
                        ? 'opacity-[1] ease-in duration-1000'
                        : 'opacity-0'
                    }
                >
                    
                        <FaArrowCircleLeft 
                            className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer'
                            size={50}
                            onClick={prevSlide}
                        />
                        { index === currentSlide && (
                            <Image src={slide.image} 
                                alt='/'
                                width="1440"
                                height="600"
                                style={{objectFit:'cover'}}
                            />
                        )}
                            <FaArrowCircleRight 
                            className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer'
                            size={50}
                            onClick={nextSlide}
                            />
                   
                </div>
            )
        })}
         </div>
     
    </div>
  )
}
