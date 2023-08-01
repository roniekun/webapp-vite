import React from 'react';
import './Menu.css';
import { Turn as Hamburger } from 'hamburger-react';
import { ThemeContext } from '../../context/ThemeContext';
import StringCharacterMapper from  '../main/animation/StringCharacterMapper';


const Menu = ({ position, showNavbar, isSmallScreen, setShowNavbar }) => {
  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("clicking");
  };
  const customString = 'menu';
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div style={{position:position}} className='menu__container'>
          {isSmallScreen ? (
            <div
              id={`component-${theme}`}
              className='menu__btn'
              onClick={handleClick}
            >
              <Hamburger toggled={showNavbar} toggle={setShowNavbar} size={20} />
            </div>
          ) : (
            <div className='menu__text__container'>
              <StringCharacterMapper
              onClick={handleClick}
              colorTheme={theme === "dark" ? 'white' : 'black'}
              customString={customString}
            />

            </div>
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
