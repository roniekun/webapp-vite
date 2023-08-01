import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import AutoscrollButton from './components/buttons/AutoscrollButton';
import Home from './components/main/Home';
import Contact from './components/main/Contact';
import About from './components/main/About';
import Portfolio from './components/main/Portfolio';
import Blog from './components/main/Blog';
import NotFound from './components/main/NotFound';
import Menu from './components/icons/Menu';
import './App.css';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import PageModal from './assets/PageModal'
// import SiteLogo from './assets/SiteLogo';



const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 600);

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    setIsDesktop(screenWidth > 600);
    setShowNavbar(screenWidth > 600);
    setIsSmallScreen(screenWidth <= 600);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setShowNavbar( currentScroll === 0); 
    // scrollPosition > currentScroll ||
    // setShowNavbar(true); shows Navigation bar
    setScrollPosition(currentScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize(isDesktop);
    };

    const handleScrollEvent = () => {
      handleScroll(scrollPosition);
    };

    window.addEventListener('resize', handleResizeEvent);
    if (isDesktop) {
      window.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleResize, handleScroll, isDesktop, scrollPosition]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              <div className='app__container' id={`component-${theme}`}>

               {isSmallScreen && <PageModal showNavbar={showNavbar}/>}
                <Header
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
                
               { isSmallScreen &&
                <Menu
                  showNavbar={showNavbar}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                  displayNames={false}
                  position= {'fixed'}
                  colorTheme={theme === "dark" ? 'white' : 'black'}
                 />}
                      
                <Navbar
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
  

                <Routes>
                  <Route path='/' element={<Home isSmallScreen={isSmallScreen} showNavbar={showNavbar} />} />
                  <Route path='/about' element={<About isSmallScreen={isSmallScreen} showNavbar={showNavbar} />} />
                  <Route path='/portfolio' element={<Portfolio isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
                  <Route path='/blog' element={<Blog isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
                  <Route path='/contact' element={<Contact isSmallScreen={isSmallScreen}  showNavbar={showNavbar} />} />
                  <Route component={NotFound} />
                </Routes>
                {/* <AutoscrollButton
                  isSmallScreen={isSmallScreen}
                  isDesktop={isDesktop}
                  showNavbar={showNavbar}
                /> */}
                {/* <Footer showNavbar={showNavbar} setShowNavbar={setShowNavbar} /> */}
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

