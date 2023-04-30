import React from 'react'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

export default function contact() {
  return (
    <div>
        <Hero heading="Contace" 
            message="Without a broom or bubble, you learnt to fly all by yourself."
        />
        <ContactForm />
    </div>
  )
}
