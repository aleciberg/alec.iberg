import React, { useState, useEffect } from 'react';
import './App.css';
import ContentContainer from './components/content-container/content-container.component';
import SidebarLinks from './components/sidebar-links/sidebar-links.component';

function App() {
  const [activeContent, setActiveContent] = useState('About Me');

  const clickHandler = (val) => {
    setActiveContent(val);
  };

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    console.log(window.innerWidth);
    setWindowDimension(window.innerWidth);
    console.log(windowDimension);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <div className="App">
      {isMobile ? (
        <ContentContainer
          activeContent={activeContent}
          clickHandler={clickHandler}
          isMobile={isMobile}
        />
      ) : (
        <>
          <SidebarLinks
            clickHandler={clickHandler}
            activeLink={activeContent}
          />
          <ContentContainer
            activeContent={activeContent}
            clickHandler={clickHandler}
            isMobile={isMobile}
          />
        </>
      )}
    </div>
  );
}

export default App;
