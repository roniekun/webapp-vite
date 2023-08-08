import './Home.css';
import Footer from '../Footer';
import HomeContent from './sections/HomeContent';
function Home({isSmallScreen}) {
  
  return (
  <div className='home__container'>
    <HomeContent isSmallScreen={isSmallScreen}/>
    <Footer isSmallScreen={isSmallScreen}/>
   </div>
 
  
  );
}

export default Home;
