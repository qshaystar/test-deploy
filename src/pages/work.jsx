import React from 'react'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'

export default function work() {
  return (
    <div>
        <Hero heading="My works" 
            message="Without a broom or bubble, you learnt to fly all by yourself."
        />
        <Portfolio />
    
    </div>
  )
}
