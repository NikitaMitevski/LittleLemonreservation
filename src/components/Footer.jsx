import logo from '../assets/little-lemon-yellow-logo3.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon logo" />
        </div>
        <div className="footer-text">
          <p>&copy; 2025 Little Lemon. All rights reserved.</p>
          <p>123 Citrus Lane, Chicago, IL | (312) 555-0123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
