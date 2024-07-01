import React, { useState } from 'react'
import Work from './Work'

const WorkExperience = () => {

    const experiences = [
        {
            title: "Senior Software Engineer", 
            company: "Goldcast", 
            startYear: "Dec 2022", 
            endYear: "Present", 
            location: "Remote (Bangalore, India)", 
            companyUrl: {
                url: "https://www.goldcast.io/",
                text: "goldcast.io"
            }, 
            description: [
                "Led the end-to-end design, development, and delivery of an in-house live video streaming service, resulting in a 90% cost reduction compared to the previous AWS MediaLive solution.",
                "Designed, developed, and delivered a new event recording pipeline from scratch, enabling seamless recording with features like backup recording and failure handling, reducing overall recording infrastructure costs by 90%.",
                "Developed a scheduler service to handle various jobs like sending scheduled emails and pre-event setups, eliminating bottlenecks caused by AWS EventBridge.",
                "Led the design and development of a caching pipeline that reduced AWS Aurora costs by 20%, improving platform scalability and efficiency.",
                "Mentored the team in designing and developing an in-house WebSockets solution, crucial for real-time features like chats and live-event updates.",
                "Worked on projects such as the New Event Studio Revamp, Event App Uptime, and Faster Alerting as the Backend Lead.",
                "Trained and mentored junior developers and engineers to improve overall team performance.",
                "Received the Audience Choice Award (Hackathon) for building a user engagement data collector and aggregator service.",
            ], 
            skillTags: ["python", "django", "typescript", "nodeJS", "express", "redis", "postgres", "docker", "AWS"],
        },
        {
            title: "Tech Lead", 
            company: "Gameskraft", 
            startYear: "Apr 2022", 
            endYear: "Dec 2022", 
            location: "Bangalore, India", 
            companyUrl: {
                url: "https://www.goldcast.io/",
                text: "goldcast.io"
            }, 
            description: [
                "Taken up the responsibility of the most critical / business impacting T1 set of services which are the Backend Game Engine and Game Transaction Service.",
                "Led the team to improve the Player Matchmaking Systems resulting in overall improvement of the Fill Rate of Cash Games from 3.5 to 5.95 (Max 6) which led to increased revenue and decrease cost",
            ], 
            skillTags: ["javascript", "nodeJS", "express", "redis", "mySQL", "mongoDB", "AWS"],
        },
        {
            title: "Software Development Engineer II", 
            company: "Gameskraft", 
            startYear: "Aug 2020", 
            endYear: "Mar 2022", 
            location: "Bangalore, India", 
            companyUrl: {
                url: "https://www.goldcast.io/",
                text: "goldcast.io"
            }, 
            description: [
                "Worked on multiple game features, stability and scalability tasks and compliances challenges on a regular basis.",
                "Worked on Stability and Scaling the Cash and Tournament Games Backend Game Engine systems to increase traffic and revenue.",
                "Actively worked with multiple clients for the game engine with solutioning and design of the requirements, optimizing the existing functionality and delivering the product that I own, timely and quality sound.",
                "Worked extensively on system level refactoring, removing pain points in the codebase by adding configurable modules to reduce feature development effort and better maintainability of the systems."
            ], 
            skillTags: ["javascript", "nodeJS", "express", "redis", "mySQL", "mongoDB", "AWS"],
        },
        {
            title: "Software Development Engineer II", 
            company: "Amazon", 
            startYear: "Nov 2019", 
            endYear: "Jul 2022", 
            location: "Hyderabad, India", 
            companyUrl: {
                url: "https://www.goldcast.io/",
                text: "goldcast.io"
            }, 
            description: [
                "Extensively involved in designing and development of several modules for Transportation for Amazon.",
                "Took ownership for multiple design and communication with carrier managers for understanding and delivering the right solution.",
                "Involved in automating a few workflows required for testing any new carrier launch which reduced the testing effort and time to a great level."
            ], 
            skillTags: ["java", "mySQL", "AWS"],
        },
        {
            title: "Software Development Engineer", 
            company: "FactEye Tech Labs Pvt Ltd", 
            startYear: "Nov 2017", 
            endYear: "Nov 2019", 
            location: "Hyderabad, India", 
            companyUrl: {
                url: "https://www.goldcast.io/",
                text: "goldcast.io"
            }, 
            description: [
                "Extensively involved in development of several modules for the product Param.ai which helps to match recruiters with candidates in a smarter way using AI.",
                "Part of the development team of Lisa, Param’s virtual screening assistant which works with Google Assistant and Facebook messenger to simplify candidate outreach by eliminating recruiter pre-screening calls and associated delays by automating candidate pre-screening.",
                "Responsible for the development of Param’s chrome extension Param-meter which helps the recruiters with sourcing the best candidates for a particular job from various sources like LinkedIn, Github and ATS like Greenhouse."
            ], 
            skillTags: ["javascript", "nodejs", "Django", "python", "PostgreSQL", "Flask"],
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const openWorkHandler = (isActive, ind) => {
        if (!isActive) setActiveIndex(-1);
        else setActiveIndex(ind)
    }

  return (
    <>
      <section id="experience" className='bg-indigo'>
        <div className='py-40 max-w-screen-lg container mx-auto'>
            <div className='grid grid-cols-1'>
                <h1 className='text-6xl text-sky font-extrabold text-center'>Professional Experience</h1>
            </div>
            <div className='grid grid-cols-1'>
                {(
                    experiences.map((exp, ind) => (
                        <Work 
                            isActive={activeIndex === ind}
                            onShow={(isActive) => openWorkHandler(isActive, ind)}
                            {...exp} 
                        />
                    ))
                )}
            </div>
        </div>
      </section>
    </>
  )
}

export default WorkExperience