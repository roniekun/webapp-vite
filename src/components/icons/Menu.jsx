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
          {isSmallScreen  &&
              <Hamburger onClick={handleClick} toggled={showNavbar} toggle={setShowNavbar} 
              color= {showNavbar? '#fafafa': '#fafafa' } 
              hideOutline={false}
               distance='sm' duration={0.3} size={25} />}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
