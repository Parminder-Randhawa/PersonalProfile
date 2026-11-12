import useLaptopStore from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMountainSun, faHeart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Center, PresentationControls } from "@react-three/drei";
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './StudioLights';
import { useMediaQuery } from 'react-responsive';

const aboutContent = {
    me: {
        title: 'A little about me.',
        description: "I'm a Computer Science student at UBC with a passion for technology, creativity, and building things. I love exploring new ideas, tackling challenges, and finding creative ways to solve problems. I'm always looking for opportunities to learn, grow, and develop my skills as an aspiring software developer.",
        image: '/images/me.jpeg',
        zoom: 1.5,
        moveX: 0.02,
        moveY: -0.06
    },

    interests: {
        title: 'Beyond the screen.',
        description: "When I'm not coding, you'll usually find me staying active or trying something new. I enjoy playing basketball, working out, snowboarding, and hiking, especially when it means spending time outdoors with friends. I'm also passionate about technology, discovering new hobbies, and finding ways to challenge myself beyond the screen.",
        image: '/images/interests.jpeg',
        moveY: -0.06
    },

    adventures: {
        title: 'Always exploring.',
        description: "I love exploring new places, experiencing different cultures, and making memories along the way. From the streets of Tokyo and London to the charm of Paris and Edinburgh, and the beauty of Sydney, every destination offers something unique. I'm always excited to discover somewhere new and see more of what the world has to offer!",
        image: '/images/adventures.jpeg',
    }
}

const AboutMe = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 })

    const {activeScreen, setActiveScreen} = useLaptopStore();
    const currentContent = aboutContent[activeScreen]

    return (
        <section id='about-me'>

            <div className="aboutme-text">
                <h2 className="text-white font-semibold text-5xl lg:text-6xl pb-7">
                    Who am I?
                </h2>

                <div key={activeScreen} className="aboutme-description">
                    <h3 className="text-white font-medium text-2xl md:text-3xl">
                        {currentContent.title}
                    </h3>

                    <p className="text-neutral-400 font-regular text-base md:text-lg mt-4 leading-relaxed">
                        {currentContent.description}
                    </p>
                </div>
            </div>

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
                        rotation={isMobile ? [0, 0, 0] : [0, -0.4, 0]}
                        config={{ mass: 1, tension: 170, friction: 26 }}
                    >
                        <Center>
                        <MacbookModel14 
                            scale={0.15} 
                            image={currentContent.image} 
                            zoom={currentContent.zoom} 
                            moveX={currentContent.moveX}
                            moveY={currentContent.moveY}
                        />
                        </Center>
                    </PresentationControls>
                </Canvas>

                <div className='screen-control-buttons'>

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
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Interests</span>
                    </button>

                    <button
                        className= {clsx({ active: activeScreen === 'adventures' })}
                        onClick= {() => setActiveScreen('adventures')}
                    >
                        <FontAwesomeIcon icon={faMountainSun} />
                        <span>Adventures</span>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default AboutMe