import { ThemeContext } from '../context/ThemeContext';
import './Header.css';

import SiteLogo from './SiteLogo';


function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <div id={`component-${theme}`}  className='header__container'>
          {/* {isSmallScreen &&( <SiteLogo/>)} */}
            </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
