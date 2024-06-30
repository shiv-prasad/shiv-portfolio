import React from 'react'
import HeroImage from "../assets/HeroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div 
        name = "home" 
        className="h-screen w-full bg-indigo"
    >
        {/* <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <div>
                    <img 
                        src={HeroImage} 
                        alt="my profile" 
                        className='mx-auto w-2/3 md:w-full rounded-full'
                    />
                </div>

                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Hello, I'm
                    Shiv Prasad
                    Backend Engineer
                </h2>
                <p className='text-gray-500 mt-2 text-xl text-center sm:text-left'>
                    I offer extensive experience with the Design and Architecture of highly Scalable and Maintainable systems from scratch, optimizing the existing functionality and delivering the product, that I own, timely and quality sound
                </p>
                <div>
                    <button>
                        Portfolio
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
                
            </div>
        </div> */}
    </div>
  )
}

export default Home