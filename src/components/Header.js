import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>ProdByPrimeTime</h1>
      </div>
      <nav className="navigation">
        <a href="/" className="home-link">Home</a>
      </nav>
    </header>
  );
}

export default Header;