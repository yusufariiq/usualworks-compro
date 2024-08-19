import Background from '/assets/backgroundpic.png';
import LogoHero from '/assets/USUALWORKS4.png'

export default function Hero() {
    return ( 
        <div className="bg-gradient-to-b from-primary from-60% to-white h-screen w-full relative">
            <img src={Background} alt="background picture" className='w-full h-full object-cover absolute'/>
            <div className="flex items-center justify-center h-screen">
                <div className="flex-col text-center mx-5 md:mx-20">
                    <img src={LogoHero} alt="Usual Works Logo" className='h-32 md:h-64 mx-auto'/>
                    <h1 className="text-white text-xl md:text-5xl font-extrabold pb-4 tracking-wider">Designing Your Visual Idea Into Reality</h1>
                    <h2 className="text-white text-sm md:text-xl font-light ">Usual Works provides quality developing stunning websites and graphic design services to achieve your vision.</h2>
                </div>
            </div>            
        </div>
    )
}