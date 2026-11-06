import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const projects = [
    {
        title: 'SlopeSense',
        description: 'A smart snowboarding assistant that recommends runs based on your skill level, weather, and mountain conditions.',
        image: '/projects/snowboarding.png',
        technologies: ['React', 'JavaScript', 'APIs']
    },
    {
        title: 'GymWhisper',
        description: 'A voice-powered workout tracker that makes logging and reviewing workouts simple.',
        image: '/projects/gymwhisper.png',
        technologies: ['React', 'JavaScript', 'Gemini API']
    },
    {
        title: 'Personal Portfolio',
        description: 'An interactive portfolio built to showcase my projects, skills, and experiences.',
        image: '/projects/portfolio.png',
        technologies: ['React', 'Tailwind CSS', 'Three.js']
    }
]

const Projects = () => {

   useGSAP(() => {
        gsap.fromTo('.projects-heading',
            { opacity: 0, y: 50 },
            {opacity: 1, y: 0, ease: 'none', scrollTrigger: {
                trigger: '#projects',
                start: 'top 90%',
                end: 'top 50%',
                scrub: true
                }
            }
        )}, [])

  return (

    <section id='projects'>
        <div className='projects-heading'>
            <h2 className='text-white font-semibold text-4xl lg:text-4xl'>
                A collection of things I've built along the way.
            </h2>
        </div>
    </section>

  )
}

export default Projects