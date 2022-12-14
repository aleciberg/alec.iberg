import '../sidebar-links/sidebar-links.styles.css';

const HamburgerMenuDropdown = ({ clickHandler }) => {
  const links = ['About Me', 'Skills', 'Projects', 'Resume', 'Links'];

  return (
    <div className="sidebar">
      <div className="links-container">
        {' '}
        {links.map((name) => {
          return (
            <li key={name} onClick={() => clickHandler(name)}>
              {name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default HamburgerMenuDropdown;
