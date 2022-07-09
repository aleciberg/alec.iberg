import { useState } from 'react';
import './App.css';
import ContentContainer from './components/content-container/content-container.component';
import SidebarLinks from './components/sidebar-links/sidebar-links.component';

function App() {
  const [activeContent, setActiveContent] = useState('About Me');

  const clickHandler = (val) => {
    setActiveContent(val);
  };

  return (
    <div className="App">
      <SidebarLinks clickHandler={clickHandler} activeLink={activeContent} />
      <ContentContainer
        activeContent={activeContent}
        clickHandler={clickHandler}
      />
    </div>
  );
}

export default App;
