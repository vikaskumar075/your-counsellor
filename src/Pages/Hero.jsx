import React from 'react'
import { HeroParallax } from '../Component/ui/hero-parallax'
import { products } from '../data/Hero'

const Hero = () => {
  return (
    <div>
      <HeroParallax products={products} />
    </div>
  )
}

export default Hero