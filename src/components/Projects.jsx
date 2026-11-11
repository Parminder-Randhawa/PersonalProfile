import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'

export const projects = [
    {
        title: 'SlopeSense',
        description: 'A smart snowboarding assistant that recommends runs based on your skill level, weather, and mountain conditions.',
        image: '/screen.png',
        technologies: ['React', 'JavaScript', 'APIs']
    },
    {
        title: 'GymWhisper',
        description: 'A voice-powered workout tracker that makes logging and reviewing workouts simple.',
        image: '/images/gymwhisper.png',
        technologies: ['React', 'JavaScript', 'Gemini API']
    },
    {
        title: 'Personal Portfolio',
        description: 'An interactive portfolio built to showcase my projects, skills, and experiences.',
        image: '/images/personalportfolio.png',
        technologies: ['React', 'Tailwind CSS', 'Three.js']
    }
]

const Projects = () => {

    const [emblaRef, carousel] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    loop: false,
    skipSnaps: true
    }, [WheelGesturesPlugin()])

    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {

        if (!carousel) return

        const onSelect = () => {
            setSelectedIndex(carousel.selectedScrollSnap())
        }

        onSelect()

        carousel.on('select', onSelect)

        return () => {
            carousel.off('select', onSelect)
        }

    }, [carousel])

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

        <div className='projects-section' ref={emblaRef}>
            
            <div className='projects-row'>
                {projects.map((project, index) => (

                    <div className={`project-cards ${selectedIndex === index ? 'active' : ''}`} key={project.title}>

                        <img src={project.image}/>
                        
                        <div className='project-info'>

                            <h3 className="text-white font-semibold text-2xl">
                                {project.title}
                            </h3>

                            <p className="text-neutral-400 font-regular text-sm mt-3">
                                {project.description}
                            </p>

                            <div className='project-technologies'>

                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>

                ))}
            </div>

        </div>

        <div className='projects-controls'>
            <button onClick={() => carousel?.scrollPrev()}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button onClick={() => carousel?.scrollNext()}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>

    </section>

  )
}

export default Projects