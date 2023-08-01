import React from 'react';
import './Portfolio.css';
import PortfolioContent from './sections/PortfolioContent';
import Footer from '../Footer';
// import PhotoCarousel from './sections/elements/PhotoCarousel';


function Portfolio({showNavbar, isSmallScreen}) {
  return (
    <>
        <div className='portfolio__container'>
        <PortfolioContent/>
       </div>
      <Footer  isSmallScreen={isSmallScreen}/>
    </>
  );
}

export default Portfolio;
