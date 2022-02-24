import React from 'react';

const Header = ({ showName }) => {
  return (
    <header>
      <h1>Welcome {showName}</h1>
    </header>
  );
};

export default Header;
