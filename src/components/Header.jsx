import logo from '../assets/little-lemon-yellow-logo3.png';

const Header = () => {
  return (
    <header className="header">
      <button className="menu-button" aria-label="Open navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className="logo">
        <img src={logo} alt="Little Lemon restaurant logo" />
      </div>
      
      <button className="cart-button" aria-label="View shopping cart">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 2L7 6H21L19 2H9Z" />
          <path d="M7 6L5 20H19L21 6" />
          <circle cx="9" cy="21" r="1" />
          <circle cx="17" cy="21" r="1" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
