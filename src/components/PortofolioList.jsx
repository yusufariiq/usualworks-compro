import React from 'react'
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ items }) => (
  <ul className="flex flex-col sm:flex-row flex-nowrap items-center justify-center gap-10 lg:gap-20 space-y-4 md:space-y-0">
    {items.map((item, index) => (
      <PortfolioItem key={index} item={item} />
    ))}
  </ul>
);

export default PortfolioList