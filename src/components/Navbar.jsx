import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './icons/SocialLinks';
import SiteLogo from './SiteLogo';
import RequestBtn from './main/sections/requestBtn/RequestBtn';


const Navbar = ({ showNavbar, isSmallScreen, setShowNavbar, isDesktop, isScroll }) => {
  const location = useLocation();


  const links = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/portfolio', text: 'work' },
    // { to: '/blog', text: 'blog' },
    { to: '/contact', text: 'contact' },
    
  ];

  const handleLinkClick = () => {

    window.scrollTo({ top: 0 })
    setShowNavbar(!isSmallScreen);
    console.log('Link clicked and active');
  };

  return (
    <>
      <ThemeContext.Consumer>
        {(themeContext) => (
          <nav 
          className={`navbar_container ${isScroll ? 'bg-color' : ''} ${showNavbar ? '' : 'hide'}`}
          id={`component-${themeContext.theme}`}>
            <>
          { isSmallScreen && <div className='nav_row_title'> <h1 >Navigations</h1> </div>} 
            
            <>
           {isDesktop && <SiteLogo showNavbar={showNavbar} color={'#fafafa'} />}
            <div className="links_container">

              {links.map((link) => (
                <div
                  className="link_wrapper"
                  key={link.to}
                >
                  <NavLink
                    onClick={() => 
                    handleLinkClick(location.pathname === link.to)}
                    className={`navbar_link ${location.pathname === link.to ? 'active_link' : ''}`}
                    to={link.to}
                  >
                    {/* {isSmallScreen && isActive && location.pathname === link.to && <ActiveIcon />} */}
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </div></>
            </>
            {/* {isDesktop && <Search showNavbar={showNavbar } color={ 'white'}/>} */}
            {isDesktop && <RequestBtn/>}
            
            {isSmallScreen &&

            <>
          <div className='nav_row_title'><h1 className='nav_row_title'> Social Accounts</h1></div>
             <SocialLinks 
            flexDirection={'column'}
            displayNames={true} height= {'20px'}
            width={'20px'}
            fontSize={'18px'} 
            textTransform={'capitalize'}
            showNavbar={showNavbar}
            fillColor={'#fafafa'}
            alignCenter={'center'}
            /></>
           }
            
           {/* {isSmallScreen &&   <ToggleTheme isSmallScreen={isSmallScreen} showNavbar={showNavbar} fontColor="white" position="relative" />} */}
            
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
