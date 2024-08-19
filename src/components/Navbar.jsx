import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';   

import Logo from "/assets/USUALWORKS3.png";
import BlueLogo from "/assets/USUALWORKS2.png";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    }

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const navItems = [
      {
        title: 'Home'
      },
      {
        title: 'About'
      },
      {
        title: 'Service'
      },
      {
        title: 'Portfolio'
      },
    ]
  
    return (
      <nav
        className={`fixed w-full z-10 transition duration-300 ease-in-out ${
          scroll ? 'bg-primary shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Desktop Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-3 lg:px-6">
           <div className="flex items-center justify-between h-12">
                <div className="flex items-center">
                    <a href="/" className="text-xl font-bold text-gray-800">
                        <img src={Logo} className="h-12" alt="Logo"/>
                    </a>
                </div>
                
                <ul className='hidden md:flex space-x-10 lg:space-x-14 items-center'>
                  { navItems.map((item, index) => (
                    <li key={index} >
                      <a href="/" className='text-white text-base lg:text-lg font-medium tracking-widest'>{item.title}</a>
                    </li>
                  ))}
                </ul>

                <div onClick={handleOpen} className='block md:hidden z-10'>
                    {open ? <FontAwesomeIcon icon={faTimes} size='lg' className='text-primary'/> : <FontAwesomeIcon icon={faBars} size='lg' className='text-white'/> }
                </div>

                <div className="hidden md:flex">
                    <div className="px-3 py-2 bg-white text-secondary text-sm lg:text-base font-bold rounded-lg hover:bg-secondary hover:text-white transition duration-300">
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        <a href="/cta" className="ml-2">Contact us</a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={ 
                  open ? 'fixed md:hidden left-0 top-0 w-full h-full bg-white ease-in-out duration-500 py-5 px-6 overflow-y-hidden' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]' }>

                  <div className="flex items-center justify-between h-[10%]">
                      <a href="/" className="text-xl">
                          <img src={BlueLogo} className="h-12" alt="Logo"/>
                      </a>
                      <FontAwesomeIcon icon={faTimes} size='lg' className='text-secondary hidden' />
                  </div>

                  <div className="grid h-[100%]">
                    <ul>
                      {navItems.map((item, index) => (
                        <li key={index} className='block px-4 py-6'>
                          <a href="" className='text-secondary font-semibold tracking-widest hover:underline duration-300 cursor-pointer'>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between py-4 my-auto">
                      <div className="px-4 py-2 text-sm sm:text-base bg-secondary text-white font-bold rounded-md">
                          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                          <a href="/cta" className="ml-1 sm:ml-2">Contact us</a>
                      </div>
                      <div className="my-auto">
                        <p className='text-secondary text-sm sm:text-md'> &#169; 2023 Usual Works</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                
            </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;