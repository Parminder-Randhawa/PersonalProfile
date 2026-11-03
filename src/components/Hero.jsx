import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 0.9;
    }, []);

  return (
    <section
        id="hero"
        className="h-fit lg:h-[80vh] flex flex-col items-center justify-center mt-40 lg:mt-24 2xl:mt-[7vh]"
    >

        <div className="relative z-10 flex flex-col items-center text-center gap-3">

            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-white">
                Parminder Randhawa
            </h1>

            <p className="font-regular text-sm md:text-base lg:text-lg text-dark-100">
                Computer Science Student @ The University of British Columbia
            </p>
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline className='mt-14 lg:mt-0'></video>
    
        <button className='relative z-10 bg-primary text-white py-1.5 px-4 md:px-5 lg:px-6 mt-55 lg:mt-0 mb-4 rounded-full font-semibold text-sm md:text-base lg:text-base cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
            Learn More
        </button>

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