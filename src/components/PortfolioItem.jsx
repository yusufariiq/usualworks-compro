import React from 'react'

const PortfolioItem = ({ item }) => (
    <div className="group relative overflow-hidden">
      <li className="relative">
        <img src={item.image} alt={item.title} className='object-cover lg:h-80' />
        <div className="absolute inset-0 flex flex-col items-center justify-items p-5 gap-5 bg-secondary bg-opacity-70 bg-blur-sm text-center translate-y-[80%] group-hover:translate-y-[25%] transition-all duration-500">
          <h1 className="text-xl tracking-widest font-extrabold text-white">{item.title}</h1>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores perspiciatis obcaecati quia sequi sed ullam dolorem veritatis expedita fugiat et, quisquam possimus nobis nesciunt recusandae tenetur quaerat cumque voluptatem odit?</p>
        </div>
      </li>
    </div>
);

export default PortfolioItem;
