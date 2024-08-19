import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

import ColoredLogo from "/assets/USUALWORKS5.png";


export default function About() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="flex flex-col sm:flex-row flex-nowrap items-center justify-center md:my-10 p-12 xl:px-20 sm:space-x-4 space-y-4 md:space-y-0" >
            <div className="flex basis-2/5 items-center justify-center" data-aos='fade-right' data-aos-duration="1000">
                <img src={ColoredLogo} alt="Usual Works Logo" className="max-h-full max-w-full" />
            </div>
            <div className="basis-3/5 text-secondary" data-aos='fade-left' data-aos-duration="3000">
                <h1 className="text-head3 md:text-head1 font-extrabold pb-1 border-b-2 mb-10 w-fit">About Us</h1>
                <p className="text-base xl:text-regular font-normal leading-8 mb-5">Usual Works offers a wide range of digital and creative solutions designed to meet your business needs.</p>
                <p className="text-base xl:text-regular font-normal leading-8">From functional website development to captivating graphic design, we are here to help you achieve your goals with outstanding results.</p>
            </div>
        </div>
    )
}