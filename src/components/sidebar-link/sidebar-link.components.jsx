import './sidebar-link.styles.css';

const SidebarLink = ({ name, clickHandler, activeLink }) => {
  console.log(activeLink === name);
  console.log('name' + name);
  console.log(activeLink);
  return (
    <div className={`sidebar-link ${activeLink === name ? 'active' : ''}`}>
      <h1 onClick={() => clickHandler(name)}>{name}</h1>
    </div>
  );
};

export default SidebarLink;
