import AboutMe from '../about-me/about-me.component';
import Projects from '../projects/projects.component';
import Resume from '../resume/resume.component';
import Skills from '../skills-component/skills-component';
import Links from '../links-component/links-component';

const ContentContainer = ({ activeContent, isMobile }) => {
  switch (activeContent) {
    case 'About Me':
      return <AboutMe isMobile={isMobile} />;
    case 'Skills':
      return <Skills />;
    case 'Projects':
      return <Projects />;
    case 'Resume':
      return <Resume />;
    case 'Links':
      return <Links />;
    default:
      return <h2>{activeContent}</h2>;
  }
};

export default ContentContainer;