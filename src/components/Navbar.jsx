import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './icons/SocialLinks';
import { useState } from 'react';


const Navbar = ({ showNavbar, isDesktop, isSmallScreen, setShowNavbar }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);

  const links = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/portfolio', text: 'work' },
    { to: '/blog', text: 'blog' },
    { to: '/contact', text: 'contact' },
    
  ];

  const handleLinkClick = () => {
    setIsActive(true);
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
            {/* <SiteLogo Left={'0'}/> */}
            <div className="links__container">
              {links.map((link) => (
                <div
                  className="link__wrapper"
                  key={link.to}
                >
                  <Link
                    onClick={() => handleLinkClick(location.pathname === link.to)}
                    className={`navbar__link ${location.pathname === link.to ? 'active' : ''}`}
                    to={link.to}
                  >
                    {/* {isSmallScreen && isActive && location.pathname === link.to && <ActiveIcon />} */}
                    {link.text}
                  </Link>
                </div>
              ))}
            </div></>
            <>
            {isSmallScreen &&
            <SocialLinks showNavbar={showNavbar} fillColor={'white'}  />}
            
           {/* {isSmallScreen &&   <ToggleTheme isSmallScreen={isSmallScreen} showNavbar={showNavbar} fontColor="white" position="relative" />} */}
            </>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
