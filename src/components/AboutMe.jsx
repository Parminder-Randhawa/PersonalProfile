import useLaptopStore from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMountainSun, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Center, PresentationControls } from "@react-three/drei";
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './StudioLights';


const AboutMe = () => {

    const {activeScreen, setActiveScreen} = useLaptopStore();

    return (
        <section id='about-me'>

            <h2 className='text-white font-semibold text-5xl lg:text-6xl'>
                Who am I?
            </h2>

            <div className='laptop-area'>

                <Canvas 
                    id='canvas' 
                    camera={{position: [0, 1, 8], fov: 50, near: 0.1, far: 100}}
                >
                    <StudioLights intensity={1} />
                    <PresentationControls 
                        global={false}
                        cursor={true}
                        snap={true}
                        speed={1}
                        rotation={[0, -0.4, 0]}
                        config={{ mass: 1, tension: 170, friction: 26 }}
                    >
                        <Center>
                        <MacbookModel14 scale={0.15} />
                        </Center>
                    </PresentationControls>
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