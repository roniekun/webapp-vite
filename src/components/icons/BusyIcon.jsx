import { ReactComponent as Busysvg } from './svg/busyIcon.svg';
import styled from 'styled-components';
import './BusyIcon.css';
import { ThemeContext } from '../../context/ThemeContext';


const StyledBusyIcon = styled.div`
  position: relative;
  width: 700px; // Set the desired width
  height: 700px; // Set the desired height
`;

function BusyIcon() {
 
  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div  id={`component-${theme}`} className='busy__container'>
      <StyledBusyIcon>
        <Busysvg />
        {/* <h1 id={`component-${theme}`} className='busy__text'> He is currently busy...</h1> */}
      </StyledBusyIcon>
    </div>

)}
</ThemeContext.Consumer>
    
  );
  
}

export default BusyIcon;
