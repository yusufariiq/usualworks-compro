import React from 'react'

const PortfolioItem = ({ item }) => (
    <div className="group overflow-hidden rounded-lg drop-shadow-lg">
      <li className="relative">
        <a href={item.url} target='_blank'>
          <img src={item.image} alt={item.title} className='object-cover lg:max-h-80' />
          <div className="absolute inset-0 flex flex-col items-center justify-items p-5 gap-5 bg-secondary bg-opacity-90 bg-blur-sm text-center translate-y-[70%] group-hover:translate-y-[25%] transition-all duration-500">
            <h1 className="text-xl tracking-widest font-extrabold text-white">{item.title}</h1>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-white">{item.description}</p>
          </div>
       </a>
      </li>
    </div>
);

export default PortfolioItem;
