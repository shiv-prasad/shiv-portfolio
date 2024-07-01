import React from 'react'
import HeroImage from "../assets/HeroImage.png"

const About = () => {
  return (
    <>
      <section id="about" className='bg-indigo'>
        <div className='py-40 max-w-screen-lg container mx-auto'>
          <div className='text-left grid gap-10 grid-cols-12' >
            <div className='col-span-5'>
              <img 
                src={HeroImage} 
                alt="Shiv Prasad" 
                className='rounded-full'  
              />
            </div>
            <div className='col-span-7 text-sky justify-normal'>
            <p className='text-2xl font-semibold text-powder_blue'>Hello, I'm</p>
            <h1 className='text-8xl font-extrabold text-orange'>Shiv Prasad</h1>
            <p className='text-4xl font-bold'>Nice to meet you.</p>
            <p className='text-lg font-medium mt-5 text-powder_blue'>
              I am a Senior Backend Engineer, offering extensive experience in the design and architecture of highly scalable and maintainable systems. I excel in optimizing existing functionality and delivering products that I own in a timely and quality manner.
            </p>
            <p className='text-lg font-medium mt-2 text-powder_blue'>
              I'm quietly confident, naturally curious, and perpetually working on improving my skills.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About