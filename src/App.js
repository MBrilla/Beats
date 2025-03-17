import React from 'react';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">ProdByPrimeTime</div>
        <div className="navbar-links">
          <a href="#" className="nav-link">Home</a>
        </div>
      </nav>
      <main className="main-content">
        <VideoList />
      </main>
    </div>
  );
}

export default App;