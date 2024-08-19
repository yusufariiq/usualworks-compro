import { useEffect } from "react";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aos from 'aos'
import 'aos/dist/aos.css'
import sample1 from '/assets/backgroundpic.png';

const Service = () => {
    
    const serviceList = [
        {
            id:1,
            name: 'Branding Design',
            description: 'Enhance your brand’s visual identity with our expert graphic design services. From logos and branding to marketing materials and digital graphics.',
            image: sample1,
        },
        {
            id:2,
            name: 'Website Development',
            description: 'Delivering  web solutions for Company Profiles, Online Stores, Personal Websites, News Portals with digital vision to life with dynamic user experiences.',
            image: sample1,            
        },

    ]

    useEffect(() => {
        Aos.init()
    }, [])

    return(
        <div className="p-12">
            <div className="flex flex-col items-center justify-center mb-20" data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 className="text-regular md:text-head2 text-secondary text-center mx-0 md:mx-10 lg:mx-20 mb-10 ">Discover  <span className="font-extrabold">website development</span> and <span className="font-extrabold">graphic design</span> services tailored to your needs</h1>
                <hr className="w-[150px] md:w-[380px] text-secondary border-b-2" />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
                {serviceList.map((list) => (        
                    <li key={list.id} className="flex flex-col lg:flex-row-reverse p-6 bg-fade-grey rounded-lg space-y-5 md:gap-4 min-h-[300px]">
                        <img src={list.image} alt={list.name} className='object-cover max-w-full max-h-[300px] lg:max-w-[200px] lg:h-auto'/>
                        <div className="flex-col space-y-5 text-secondary">
                            <h1 className="text-2xl font-black sm:text-3xl">{list.name}</h1>
                            <p className='text-third'>{list.description}</p>
                            <button className="text-secondary font-extrabold flex items-center space-x-4" type='button'>
                                    <span>Read more</span>
                                    <FontAwesomeIcon icon={faChevronRight} size='sm' />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Service;