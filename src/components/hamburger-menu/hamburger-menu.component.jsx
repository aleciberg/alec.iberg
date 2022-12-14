import { useState } from 'react';

const HamburgerMenu = ({ activeContent, isMobile, clickHandler }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    console.log('they clicked it');
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
    clickHandler('Hamburger Menu');
  };

  return (
    <div style={{ display: 'flex', height: '50px', width: '10px' }}>
      <button onClick={() => clickHandler('Hamburger Menu')}>
        Hamburger Holder for Now
      </button>
      {hamburgerOpen ? <div></div> : <div></div>}
    </div>
  );
};

export default HamburgerMenu;
