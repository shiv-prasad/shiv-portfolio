import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import HeroImage from "../assets/HeroImage.png"

const Work = ({title, company, startYear, endYear, location, companyUrl, description, skillTags, isActive, onShow}) => {

    return (
        <div className="w-full max-w-screen-lg mx-auto bg-white rounded-lg overflow-hidden pt-10">
            <div className="px-6 py-4 mt-0 bg-sky rounded-lg">
                <div className="flex justify-between items-center">
                    <div className='justify-between items-center'>
                        <h2 className="text-xl font-bold text-indigo">{title} @ {company}</h2>
                        <h2 className="flex text-lg font-semibold text-indigo items-center gap-2"><FaCalendar/> {startYear} - {endYear}</h2>
                    </div>
                    <button 
                        onClick={() => onShow(!isActive)} 
                        className="text-indigo text-4xl focus:outline-none"
                    >
                        {isActive ? '-' : '+'}
                    </button>
                </div>
            </div>
            {isActive && (
                <div className="px-6 py-4 bg-blue rounded-lg mt-5 transition-opacity ease-in-out delay-700 bg-opacity-60">
                    <p className='flex text-lg font-semibold text-orange items-center gap-1'>
                        <FaLocationDot className='font-bold' /> {location}
                        <BiLinkExternal  className='font-bold ml-4' /> <a href={companyUrl.url} target="_blank">{companyUrl.text}</a>
                    </p>
                    <div className='grid grid-cols-12 text-sky'>
                        <div className='col-span-10'>
                            <ul className='list-disc p-5 justify font-medium'>
                                {(
                                    description.map(line => (
                                        <li>{line}</li>
                                    ))
                                )}
                            </ul>
                        </div>
                        <div className='col-span-2 items-center'>
                            <img src={HeroImage} className="rounded-full"/>
                        </div>
                        <div className='flex col-span-10 gap-2 mt-2 flex-wrap'>
                            {(
                                skillTags.map(tag => (
                                    <span class="inline-flex items-center rounded-full bg-orange px-3 py-1 text-s text-sky font-light bg-opacity-70 capitalize">{tag}</span>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
