import { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <h2>Shri Ahalya Tex</h2>
          <p className="sub-text">Quality Tradition</p>
        </div>

        <ul>
          <li 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => handleNavClick('home')}
          >
            Home
          </li>
          <li 
            className="nav-button"
            onClick={openLogin}
          >
            Login
          </li>
          <li 
            className="nav-button"
            onClick={openSignup}
          >
            Signup
          </li>
        </ul>

        <div className="icons">
          <span 
            className="icon" 
            onClick={() => handleNavClick('about')}
            title="About Us"
          >
            ℹ️
          </span>
          <span className="icon" title="Cart">🛒</span>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeModals} 
        onSwitchToSignup={openSignup}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={closeModals}
        onSwitchToLogin={openLogin}
      />
    </>
  );
}
