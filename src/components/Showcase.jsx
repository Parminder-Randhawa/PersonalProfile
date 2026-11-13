import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Showcase = () => {

    useGSAP(() => {

        const media = gsap.matchMedia();

        media.add('(width > 1000px)', () => {

            gsap.fromTo('.mask img',
                {scale: 70, transformOrigin: '45.21% 32.94%'},
                {scale: 1, ease: 'power2.out', duration: 3, scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top 70px',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                    }  
                }
            );
        });

        media.add('(width <= 1000px)', () => {
            gsap.set('.mask img', { scale: 1 });
        });

        return () => media.revert();
    }, []);

    return (
        <section id='showcase'>
            <div className='media'>
                <video src="/videos/showcase.mp4" loop muted autoPlay playsInline onLoadedMetadata={() => ScrollTrigger.refresh()}/>
                <div className='mask'>
                    <img src="/images/mask.png"/>
                </div>
            </div>
        </section>
    )
}

export default Showcase