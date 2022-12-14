const HamburgerMenuDropdown = ({ clickHandler }) => {
  const links = ['About Me', 'Skills', 'Projects', 'Resume', 'Links'];

  return (
    <div
      style={{
        margin: '35px',
        padding: '20px',
      }}
    >
      <div>
        {' '}
        {links.map((name) => {
          return (
            <h1
              key={name}
              onClick={() => clickHandler(name)}
              style={{
                margin: '35px',
                padding: '20px',
                color: '#65946a',
              }}
            >
              {name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default HamburgerMenuDropdown;
