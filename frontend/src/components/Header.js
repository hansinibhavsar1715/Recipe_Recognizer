import React from 'react';
import { Utensils, User } from 'lucide-react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 mb-4">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
          <Utensils className="text-orange me-2" size={28} />
          <span style={{ fontSize: '1.5rem', letterSpacing: '-1px' }}>RecipeLens <span className="ai-tag">AI</span></span>
        </a>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-dark rounded-pill px-4 d-flex align-items-center gap-2">
            <User size={18} /> Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;