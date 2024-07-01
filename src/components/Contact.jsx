import React from 'react'
import { IoMdMail, IoIosCall, IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaCopyright } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Contact = () => {

    const links = [{
        id: 1,
        link: "mailto:shiv.prsd19@gmail.com",
        socialComponent: <IoMdMail />,
        text: "shiv.prsd19@gmail.com"
    }, {
        id: 2,
        link: "tel:+919559100337",
        socialComponent: <IoIosCall />,
        text: "(+91) 9559100337"
    }, {
        id: 3,
        link: "https://www.linkedin.com/in/shiv-prasad/",
        socialComponent: <FaLinkedin />,
        text: "LinkedIn/shiv-prasad"
    }, {
        id: 4,
        link: "https://github.com/shiv-prasad",
        socialComponent: <IoLogoGithub />,
        text: "Github/shiv-prasad"
    }]

    return (
        <>
            <section className='bg-sky'>
                <div id="contact"></div>
                <div className='py-40 max-w-screen-lg container mx-auto'>
                    <h1 className='text-orange font-extrabold text-4xl'>Start a project</h1>
                    <div className='text-left grid gap-10 grid-cols-12' >
                        <div className='col-span-2 md:col-span-8'>
                            <p className='text-blue text-2xl mt-5 font-semibold'>Interested in working together?</p>
                            <p className='text-blue text-2xl mt-2 font'>We should queue up a time to chat. I’ll buy the coffee.</p>
                            <a 
                                href="https://calendly.com/shiv-prsd19/30min" target="_blank" 
                                className='inline-flex justify-center rounded-lg text-lg font-semibold px-5 py-2 mt-5 cursor-pointer text-sky bg-indigo hover:bg-orange hover:scale-105 duration-200 items-center gap-1'
                            >
                                Lets do this <FaAngleRight />
                            </a>
                        </div>
                        <ul className='col-span-2 md:col-span-4 mt-5'>
                            {links.map(({id, link, socialComponent, text}) => (
                                <li>
                                    <a 
                                        id={id}
                                        className="flex items-center gap-2 mb-2 text-indigo hover:text-orange hover:scale-105 duration-500 font-semibold text-xl" 
                                        href={link} target="_blank"
                                    >
                                        {socialComponent} {text}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <footer className='bg-sky'>
                <div className='py-16 text-center text-powder_blue font-semibold max-w-screen-lg m-auto justify-center'>
                    <p className='flex justify-center gap-2 items-center'>Handcrafted by me <FaCopyright/> twentytwentyfour</p>
                </div>
            </footer>
        </>
        
    )
}

export default Contact