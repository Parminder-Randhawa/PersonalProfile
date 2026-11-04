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
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            })

            timeline.fromTo('.mask img',
                {scale: 140, transformOrigin: '52% 52%'},
                {scale: 1, ease: 'power2.out', duration: 5 }
            ).to('.content', {opacity: 1, y: 0, ease: 'power1.in'})
        }
    }, [isMobile])

    return (
        <section id='showcase'>
            <div className='media'>
                <video src="/IMG_1478.MOV" loop muted autoPlay playsInline onLoadedMetadata={() => ScrollTrigger.refresh()}/>
                <div className='mask'>
                    <img src="/mask3.png"/>
                </div>
            </div>

            <div className='content'></div>
        </section>
  )
}

export default Showcase