import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './icons/SocialLinks';
import { useState } from 'react';
import SiteLogo from './SiteLogo';


const Navbar = ({ showNavbar, isDesktop, isSmallScreen, setShowNavbar }) => {
  const location = useLocation();


  const links = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/portfolio', text: 'work' },
    // { to: '/blog', text: 'blog' },
    { to: '/contact', text: 'contact' },
    
  ];

  const handleLinkClick = () => {
  
    setShowNavbar(!isSmallScreen);
    console.log('Link clicked and active');
  };

  

  return (
    <>
      <ThemeContext.Consumer>
        {(themeContext) => (
          <nav 
          className={showNavbar ? 'navbar_container' : 'navbar_hidden'}  
          id={`component-${themeContext.theme}`}>
            
            <>
            <SiteLogo />
            <div className="links_container">
              {links.map((link) => (
                <div
                  className="link_wrapper"
                  key={link}
                >
                  <NavLink
                    onClick={() => handleLinkClick(location.pathname === link.to)}
                    className={`navbar_link ${location.pathname === link.to ? 'active_link' : ''}`}
                    to={link.to}
                  >
                    {/* {isSmallScreen && isActive && location.pathname === link.to && <ActiveIcon />} */}
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </div></>
            <>
            {isSmallScreen &&
            <SocialLinks showNavbar={showNavbar} fillColor={'black'}  />}
            
           {/* {isSmallScreen &&   <ToggleTheme isSmallScreen={isSmallScreen} showNavbar={showNavbar} fontColor="white" position="relative" />} */}
            </>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
