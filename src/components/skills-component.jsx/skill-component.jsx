import gitlab from './gitlab-ci.png';
import jest from './jest.png';
import node from './node.png';
import react from './React-icon.svg.png';
import redux from './Redux.png';
import typescript from './typescript.png';
import javascript from './js.png';
import gitbash from './gitbash.png';

import './skills.styles.css';

const Skills = () => {
  return (
    <div className="skills">
      <img className="skill" src={react} alt={'ReactJS'} title={'ReactJS'} />
      <img
        className="skill"
        src={typescript}
        alt={'TypeScript'}
        title={'TypeScript'}
      />
      <img
        className="skill"
        src={javascript}
        alt={'JavaScript'}
        title={'JavaScript'}
      />
      <img className="skill" src={node} alt={'NodeJS'} title={'NodeJS'} />
      <img className="skill" src={jest} alt={'Jest'} title={'Jest'} />
      <img className="skill" src={redux} alt={'Redux'} title={'Redux'} />
      <img className="skill" src={gitlab} alt={'CI/CD'} title={'CI/CD'} />
      <img
        className="skill"
        src={gitbash}
        alt={'Git Bash'}
        title={'Git Bash'}
      />
    </div>
  );
};

export default Skills;
