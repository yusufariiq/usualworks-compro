import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '/assets/USUALWORKS4.png'

export default function Footer() {
    return (
        <footer className="bg-primary text-third">
            <div className="grid grid-cols-4 gap-4 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="col-span-4 md:col-span-2 mx-auto">
                    <a href="https://flowbite.com/">
                        <img src={ Logo } alt="Usual Works Logo" className="h-40" />
                    </a>
                </div>
                <div className='my-5 col-span-2 md:col-span-1 mx-auto'>
                    <h2 className="mb-6 text-base font-semibold uppercase">Contact</h2>
                    <ul className="font-medium text-xs sm:text-base">
                        <li className="mb-4">
                            <a href="https://flowbite.com/" className="hover:underline">+62 877-7289-3399</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">usualworks@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className='my-5 col-span-2 md:col-span-1 mx-auto'>
                    <h2 className="mb-6 text-base font-semibold uppercase">Follow us</h2>
                    <ul className="font-medium">
                        <li className="mb-4">
                            <a href="#" className="bg-white px-3 py-4 rounded-full">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </a>
                            <a href="#" className="bg-white px-3 py-4 rounded-full ms-5">
                                <FontAwesomeIcon icon={faInstagram} size="2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
