import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [bgColor, setBgColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav((nav) => !nav);
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setBgColor('white');
                setTextColor('black');
            }else {
                setBgColor('transparent');
                setTextColor('white');
            }
        }

        window.addEventListener('scroll', changeColor);
        // return (() => {
        //     window.removeEventListener('scroll', changeColor);
        // })
    }, []); 

    useEffect(() => {
        if(nav) {
            document.querySelector("body").style.overflow="hidden";
        }else {
            document.querySelector("body").style.overflow="auto";
        }
    }, [nav])

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        style={{backgroundColor: bgColor}}
    >
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
             <Link href='/'>
                <h1 className='font-bold text-4xl'
                    style={{color: textColor}}
                >
                    Logo
                </h1>
            </Link>
             <ul className='hidden sm:flex' style={{color: textColor}}>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/work'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
              {/* mobile button */}
            <div className='block sm:hidden z-10' onClick={handleNav}>
                {nav ? (
                    <AiOutlineClose size={20} style={{color: textColor}}/>
                ) : ( 
                    <AiOutlineMenu size={20} style={{color: textColor}}/>
                )}
            </div>
            {/* mobile menu*/}
            <div className={
                nav 
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }>

                <ul>
                    <li onClick={handleNav}
                        className='p-4 text-4xl hover:text-gray-500 duration-300'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav}
                        className='p-4 text-4xl hover:text-gray-500 duration-300'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li onClick={handleNav}
                        className='p-4 text-4xl hover:text-gray-500 duration-300'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li onClick={handleNav}
                        className='p-4 text-4xl hover:text-gray-500 duration-300'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
