import AboutMe from '../about-me/about-me.component';
import Projects from '../projects/projects.component';
import Resume from '../resume/resume.component';
import Skills from '../skills-component/skills-component';
import Links from '../links-component/links-component';
import HamburgerMenuDropdown from '../hamburger-menu-dropdown/hamburger-menu-dropdown.component';

const ContentContainer = ({ activeContent, isMobile, clickHandler }) => {
  switch (activeContent) {
    case 'About Me':
      return <AboutMe isMobile={isMobile} />;
    case 'Skills':
      return <Skills isMobile={isMobile} />;
    case 'Projects':
      return <Projects isMobile={isMobile} />;
    case 'Resume':
      return <Resume isMobile={isMobile} />;
    case 'Links':
      return <Links isMobile={isMobile} />;
    case 'Hamburger Menu':
      return <HamburgerMenuDropdown clickHandler={clickHandler} />;
    default:
      return <h2>{activeContent}</h2>;
  }
};

export default ContentContainer;
