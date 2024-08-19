import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Widget(){
    useEffect(() => {
        Aos.init()
    }, [])

    return(
        <div className="h-auto md:h-540 p-12 my-12 flex items-center justify-center" data-aos='fade-up' data-aos-duration='2000' data-aos-anchor-placement="center-bottom" >
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full sm:w-4/5 gap-6 bg-secondary p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
                <h1 className="basis-2/3 text-lg sm:text-3xl md:text-3xl lg:text-4xl text-center text-white">Consult your website and brand design needs <span className="font-black">now!</span></h1>
                <a href="" className="bg-white text-secondary text-base md:text-lg font-bold tracking-wider px-3 py-2 lg:py-4 lg:px-6 w-fit rounded-xl">Consult now</a>
            </div>
        </div>  
    )
}