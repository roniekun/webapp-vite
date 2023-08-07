import { ThemeContext } from '../context/ThemeContext';
import './Header.css';
import SiteLogo from './SiteLogo';
import Search from './main/search/Search';


function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div id={`component-${theme}`}  className='header__container'>
        
          {isSmallScreen && <SiteLogo color={'#fafafa'} transform={'translate(10%)' }/> }
          {isSmallScreen && <Search color={'#fafafa'}/>}
            </div>

      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
