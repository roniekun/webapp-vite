import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './pages/assets/icons/SocialLinks';
import SiteLogo from './SiteLogo';
import RequestBtn from './pages/assets/buttons/RequestBtn';


const Navbar = ({ showNavbar, isSmallScreen, isMediumScreen, setShowNavbar, isDesktop, isScroll }) => {
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
          { isSmallScreen && <div className='nav_row_title'> <h4 >Sections</h4> </div>} 
            
            <>
           {isDesktop && <SiteLogo showNavbar={showNavbar} style={{ color : '#3D3D3d'}} />}
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
            {!isMediumScreen && !isSmallScreen && <RequestBtn/>}
            {isSmallScreen &&

            <>
          <div className='nav_row_title'><h4>Socials</h4></div>
          <SocialLinks 
          style={{

              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '20px',
              fontSize: '12px',
              textTransform: 'capitalize',
              width: 'fit-content',
              paddingBlock:'10%',
              fontFamily: 'Lato, sans serif',
              fontWeight: '500'
           
          
            
          }}
              displayNames={true}
              showNavbar={showNavbar} 
          />
            
            </>
           }
            
           {/* {isSmallScreen &&   <ToggleTheme isSmallScreen={isSmallScreen} showNavbar={showNavbar} fontColor="white" position="relative" />} */}
            
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Navbar;
