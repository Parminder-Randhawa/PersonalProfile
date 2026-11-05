import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Showcase = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {

        if(!isMobile) {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top 30px',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            })

            timeline.fromTo('.mask img',
                {scale: 140, transformOrigin: '45.2% 38.2%'},
                {scale: 1, ease: 'power2.out', duration: 3 }
            ).to('.content', {opacity: 1, y: 0, ease: 'power1.in'})
        }
    }, [isMobile])

    return (
        <section id='showcase'>
            <div className='media'>
                <video src="/videos/IMG_1478.MOV" loop muted autoPlay playsInline onLoadedMetadata={() => ScrollTrigger.refresh()}/>
                <div className='mask'>
                    <img src="/mask6.png"/>
                </div>
            </div>
        </section>
  )
}

export default Showcase