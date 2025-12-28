import BookingForm from './BookingForm';
import restaurantImage from '../assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg';

const BookingPage = ({ onSubmit, onBack }) => {
  return (
    <div className="booking-page">
      <button className="back-button" onClick={onBack} aria-label="Go back to home page">
        ←
      </button>
      
      <div className="booking-container">
        <div className="booking-form-container">
          <h2>Book a table</h2>
          <BookingForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
