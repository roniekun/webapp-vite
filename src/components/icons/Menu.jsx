import React from 'react';
import './Menu.css';
import { Twirl as Hamburger } from 'hamburger-react';
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
        <div style={{position:position}} className='menu_container'>
          {isSmallScreen ? (
            <div
              id={`component-${theme}`}
              style={{ background: showNavbar? 'black': '', transition: '.3s' }}
              className='menu__btn'
              onClick={handleClick}
            >
              <Hamburger toggled={showNavbar} toggle={setShowNavbar} 
              color= {showNavbar? 'white': 'black' } 
              hideOutline={false}
               distance='sm' duration={0.3} size={25} />
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
