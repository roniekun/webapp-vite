import { ThemeContext } from '../context/ThemeContext';
import './Header.css';
import SiteLogo from './SiteLogo';
import RequestBtn from './main/sections/requestBtn/RequestBtn';


function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div id={`component-${theme}`}  className='header__container'>
          {isSmallScreen && <SiteLogo color={'#fafafa'} transform={'translate(10%)' }/> }
            </div>

      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
