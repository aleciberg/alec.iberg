import LogoContainer from '../logo-container/logo.component';
import SidebarLink from '../sidebar-link/sidebar-link.components';
import banner from '../logo-container/construction.png';
import alec from '../logo-container/handwritten.PNG';

import './sidebar-links.styles.css';

const SidebarLinks = ({ activeLink, clickHandler }) => {
  const links = ['About Me', 'Skills', 'Projects', 'Resume', 'Links'];

  console.log('activelink in sidebar links is' + activeLink);

  return (
    <div className="sidebar">
      <div className="logo-container">
        {' '}
        {/* <img src={alec} alt={'Site is Under Construction'} /> */}
        <br></br>
        <br></br>
        <h1>Alec Iberg</h1>
        <LogoContainer />
      </div>
      <div className="links-container">
        {' '}
        {links.map((name) => {
          return (
            <SidebarLink
              activeLink={activeLink}
              name={name}
              key={name}
              clickHandler={clickHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarLinks;
