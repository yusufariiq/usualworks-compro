import { faInstagram, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '/assets/USUALWORKS4.png'

const Footer = () => {
  return (
    <footer className="bg-secondary text-third">
        <div className="container mx-auto py-7 px-60 bg-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className='mx-auto col-span-1'>
                    <img src={Logo} alt="Usual Works Logo" className="h-32"/>
                    <div className="flex justify-center space-x-5">
                        <a href="#" className="hover:text-gray-300"><FontAwesomeIcon size="xl" color='white' icon={faFacebook}/></a>
                        <a href="#" className="hover:text-gray-300"><FontAwesomeIcon size="xl" color='white' icon={faInstagram}/></a>
                        <a href="#" className="hover:text-gray-300"><FontAwesomeIcon size="xl" color='white' icon={faLinkedin}/></a>
                        <a href="#" className="hover:text-gray-300"><FontAwesomeIcon size="xl" color='white' icon={faGithub}/></a>
                    </div>
                </div>
                <div className='mx-auto col-auto'>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 flex flex-col justify-center">
                        <li><a href="#" className="hover:text-gray-300">Brand Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">UI/UX Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">Company Profile Design</a></li>
                        <li><a href="#" className="hover:text-gray-300">Web Development</a></li>
                    </ul>
                </div>
                <div className='mx-auto flex flex-col col-auto'>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <a href='#' className="mb-2">Jl. Contoh No. 123, BSD City, Tangerang Selatan</a>
                    <a href='#' className="mb-2">Phone: (+62) 877-7289-3399</a>
                    <a href='#' className="mb-4">Email: usualworks@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="p-7 text-center text-white text-sm">
            <p className="text-sm">© 2023 UsualWorks. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
