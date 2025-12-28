import reservedImage from '../assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg';

const SuccessPage = ({ onHome }) => {
  return (
    <div className="success-page" role="main" aria-label="Booking success confirmation">
      <div className="success-container">
        <div className="success-image">
          <div className="reserved-overlay">RESERVED</div>
        </div>
        
        <div className="success-message">
          <h2>Thank You.</h2>
          <p>Your booking is confirmed.</p>
          
          <p className="contact-info">
            Please feel free to get in touch with us on +1-234-56789, 
            if you need any other customisations in your booking.
          </p>
          
          <button 
            className="home-btn" 
            onClick={onHome}
            aria-label="Return to home page"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
