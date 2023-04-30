import React from 'react'

export default function ContactForm() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='text-4xl font-bold pb-6'>Feel free to contact me!</h1>
        <form className='max-w-[600px] mx-auto px-3'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 focus:border-cyan-600 focus:outline-none' type="text" placeholder='Name'/>
                <input className='border shadow-lg p-3 focus:border-cyan-600 focus:outline-none' type="email" placeholder='Email'/>
            </div>
            <input className='border shadow-lg p-3 my-3 w-full focus:border-cyan-600 focus:outline-none' type="text" placeholder='Subject'/>
            <textarea className='border shadow-lg p-3 w-full focus:border-cyan-600 focus:outline-none' cols="30" rows="10" placeholder='Description...'></textarea>
            <button className='border shadow-lg p-3 w-full mt-5 bg-cyan-300 text-cyan-800 
                hover:bg-cyan-500 hover:text-cyan-100 duration-200'>
                    Submit
            </button>
        </form>
    </div>
  )
}
