import { useState } from "react";
import PortfolioList from "./PortofolioList";


const Portfolio = ({ designs, sites }) => {
    const [activeTab, setActiveTab] = useState('design')

    return (
        <section className="p-12">
             <div className="flex items-center justify-center">
                <h1 className="text-head3 md:text-head1 font-bold text-secondary pb-1 border-b-2 mb-10 w-fit">Portfolio</h1>
            </div>
            <div className="flex justify-center gap-5 mb-4">
                <button 
                className={`text-xs sm:text-sm md:text-regular cursor-pointer rounded-xl p-3 sm:px-4 mb-5 sm:mb-10 ${activeTab === 'design' ? 'bg-secondary text-white transition-all duration-500 ease-in-out' : 'border border-secondary'}`} 
                onClick={() => setActiveTab('design')}
                >
                Branding Design
                </button>
                <button 
                className={`text-xs sm:text-sm md:text-regular cursor-pointer rounded-xl p-3 sm:px-4 mb-5 sm:mb-10 ${activeTab === 'webdev' ? 'bg-secondary text-white transition-all duration-500 ease-in-out' : 'border border-secondary'}`} 
                onClick={() => setActiveTab('webdev')}
                >
                Website Development
                </button>
            </div>

            <div>
                {activeTab === 'design' ? (
                    <PortfolioList items={designs} />
                ) : (
                    <PortfolioList items={sites} />
                )}
            </div> 
        </section>
    )
}
// const PortfolioCard = ({ title, description }) => (
//     <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="p-6">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-700">{description}</p>
//       </div>
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//         <p className="text-white text-lg">{description}</p>
//       </div>
//     </div>
// );

export default Portfolio