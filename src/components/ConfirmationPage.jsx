const ConfirmationPage = ({ bookingData, onHome }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour24 = parseInt(hours);
    return `${timeString.padStart(5, '0')}`;
  };

  return (
    <div className="confirmation-page" role="main" aria-label="Booking confirmation">
      <div className="confirmation-container">
        <h2>Book a Table</h2>
        
        <div className="confirmation-details">
          <div className="detail-row">
            <span className="detail-label">Date :</span>
            <span className="detail-value">{formatDate(bookingData.date)}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Time :</span>
            <span className="detail-value">{formatTime(bookingData.time)}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Occassion :</span>
            <span className="detail-value">{bookingData.occasion}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Guest Count :</span>
            <span className="detail-value">{bookingData.guests}</span>
          </div>
        </div>

        <button 
          className="submit-btn" 
          onClick={onHome}
          aria-label="Confirm and proceed"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
