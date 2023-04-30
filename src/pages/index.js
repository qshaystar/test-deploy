import Image from 'next/image'
import Hero from '../components/Hero'
import Slider from '@/components/Slider'
import Instagram from '@/components/Instagram'


export default function Home() {
  return (
   <div>
    <Hero heading="Turbines" 
      message="Without a broom or bubble, you learnt to fly all by yourself."/>
    <Slider/>
    <Instagram />
   </div>
  )
}
