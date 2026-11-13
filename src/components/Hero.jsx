import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 0.9;
    }, []);

  return (
    <section
        id="hero"
        className="min-h-[80vh] h-auto flex flex-col items-center justify-center mt-26 md:mt-22 2xl:mt-[7vh]"
    >

        <div className="relative z-10 flex flex-col items-center text-center gap-3">

            <h1 className="font-semibold text-4xl lg:text-5xl text-white">
                Parminder Randhawa
            </h1>

            <p className="font-regular text-md md:text-base lg:text-lg text-dark-100">
                Computer Science Student @ The University of British Columbia
            </p>
        </div>

        <div className="w-full mt-6 md:h-auto md:max-h-none md:mt-0">
            <video 
                ref={videoRef} 
                src={isMobile
                    ? '/videos/ubc-mobile-hero.mp4'
                    : '/videos/ubc-desktop-hero.mp4'
                }
                autoPlay 
                muted 
                playsInline 
                loop 
                className='w-full h-[50svh] md:h-auto'
            />
        </div>
    
        <a href="#about-me" className='relative z-10 bg-primary text-white py-1.5 px-4 md:px-5 lg:px-6 mt-12 md:mt-0 mb-4 rounded-full font-semibold text-sm md:text-base lg:text-base cursor-pointer hover:bg-sky-500 hover:shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-300 ease-in-out'>
            Learn More
        </a>

        <p className='flex items-center text-xs text-dark-100'>
            <span className="flex">
                {"Scroll to explore".split("").map((letter, index) => (
                    <span 
                        key={index} 
                        className='inline-block motion-safe:animate-ripple' 
                        style={{animationDelay: `${index * 70}ms`}}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))} 
            </span>
            <FontAwesomeIcon 
                icon={faArrowDown} 
                className="motion-safe:animate-ripple"
                style={{ animationDelay: "1190ms" }}
            /> 
            {/* maybe keep bounce animation */}
        </p>
    </section>
  )
}

export default Hero