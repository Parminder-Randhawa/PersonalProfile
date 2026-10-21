import React from 'react'
import useLaptopStore from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMountainSun, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from "@react-three/drei";


const AboutMe = () => {

    const {activeScreen, setActiveScreen} = useLaptopStore();

    return (
        <section id='about-me'>

            <h2 className='text-white font-semibold text-5xl lg:text-6xl'>
                Who am I?
            </h2>

            <div className='absolute z-50 bottom-20 md:bottom-30 2xl:bottom-52 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-30'>

                <Canvas 
                    id='canvas' 
                    camera={{position: [2, 1, 5], fov: 50, near: 0.1, far: 100}}
                >
                    <Box scale= {2}></Box>
                    <OrbitControls enableZoom= {false}></OrbitControls>
                </Canvas>

                <div className='screen-control'>

                    <button
                        className= {clsx({ active: activeScreen === 'me' })}
                        onClick= {() => setActiveScreen('me')}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <span>Me</span>
                    </button>

                    <button
                        className= {clsx({ active: activeScreen === 'interests' })}
                        onClick= {() => setActiveScreen('interests')}
                    >
                        <FontAwesomeIcon icon={faMountainSun} />
                        <span>Interests</span>
                    </button>

                    <button
                        className= {clsx({ active: activeScreen === 'journey' })}
                        onClick= {() => setActiveScreen('journey')}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>Journey</span>
                    </button>

                </div>
            </div>

            
        </section>
  )
}

export default AboutMe