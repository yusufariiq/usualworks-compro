import React from 'react'
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
    {items.map((item, index) => (
      <PortfolioItem key={index} item={item} />
    ))}
  </ul>
);

export default PortfolioList