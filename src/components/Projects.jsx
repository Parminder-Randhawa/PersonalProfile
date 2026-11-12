import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const projects = [

    {
        title: 'Personal Portfolio',
        description: 'An interactive portfolio featuring 3D models, scroll-driven animations, and responsive layouts to showcase my projects, skills, and experience.',
        image: '/images/personalportfolio.png',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Three.js', 'GSAP']
    },
    {
        title: 'GymWhisper',
        description: 'A voice-powered workout tracker that uses AI to turn spoken workout entries into structured logs, with live transcription, workout history, and an intuitive interface.',
        image: '/images/gymwhisper.png',
        technologies: ['React', 'JavaScript', 'Gemini API', 'Web Speech API']
    },
    {
        title: 'SlopeSense',
        description: 'A smart ski and snowboard companion for Vancouver’s North Shore, featuring interactive trail maps, personalized run recommendations, GPS ride tracking, weather forecasts, and activity replays.',
        image: '/images/slopesense.png',
        technologies: ['React', 'TypeScript', 'MapLibre GL JS', 'Open-Meteo API', 'IndexedDB', 'Vite']
    },
    {
        title: 'Relay',
        description: 'A Chrome extension that transfers conversations between ChatGPT, Claude, and Gemini, with persistent memories and AI-powered context retrieval for seamless switching.',
        image: '/images/relay.png',
        technologies: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS', 'IndexedDB', 'OpenAI API']
    }
]

const Projects = () => {

    const [emblaRef, carousel] = useEmblaCarousel({
        align: 'center',
        containScroll: false,
        loop: true,
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
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, ease: 'none', scrollTrigger: {
                trigger: '#projects',
                start: 'top 90%',
                end: 'top 50%',
                scrub: true
                }
            }
        )
        
        gsap.fromTo('.projects-sectionGSAP', 
            {x:500, opacity: 0},
            {x: 0, opacity: 1, ease: 'none', scrollTrigger: {
                trigger: '#projects',
                start: 'top 80%',
                end: 'top 10%',
                scrub: 0.5
                }
            }
        )
    }, [])

  return (
    <section id='projects'>

        <div className='projects-heading'>
            <h2 className='text-white font-semibold text-4xl lg:text-4xl'>
                A collection of things I've built along the way.
            </h2>
        </div>

        <div className='projects-sectionGSAP'>
            <div className='projects-section' ref={emblaRef}>
                
                <div className='projects-row'>
                    {projects.map((project, index) => (

                        <div className='project-cardsSLIDE' key={project.title}>
                            <div className={`project-cards ${selectedIndex === index ? 'active' : ''}`}>

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
                        </div>

                    ))}
                </div>

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