import React from 'react'

const NavBar = () => {

    const links = [
        {
            id: 1,
            href: '#about',
            link: 'about',
        },
        {
            id: 2,
            href: '#experience',
            link: 'experience',
        },
        {
            id: 3,
            href: '#contact',
            link: 'contact',
        }
    ]

    return (
        <>
            <header className='relative h-full overflow-y-auto bg-indigo'>
                <span id="home"></span>
                <nav className='sticky top-0 z-40'>
                    <div className='max-w-screen-lg m-auto flex justify-between py-6 md:py-8'>
                        <div className='font-bold text-2xl text-orange'>
                            <a href="#">Shiv Prasad</a>
                        </div>
                        <div>
                            <ul className='flex gap-4'>
                                {links.map(({id, href, link}) => (
                                    <li 
                                        key={id}
                                        className='cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-sky text-powder_blue'
                                    >
                                        <a href={href}>{link}</a>
                                    </li>
                                ))}
                                <li>
                                    <a href="https://drive.google.com/file/d/1JYYbN6i8a6d7p3Cf_2UlviUgk2PQbkJh/view" target="_blank" className='justify-center rounded-lg font-semibold px-3 py-2 mt-5 cursor-pointer text-sky bg-powder_blue hover:bg-orange duration-200 items-center gap-1' download="Shiv-Prasad-Resume">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar