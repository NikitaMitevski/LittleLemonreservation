import { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/api';

const BookingForm = ({ onSubmit }) => {
  const [occasion, setOccasion] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (date) {
      const selectedDate = new Date(date);
      const times = fetchAPI(selectedDate);
      setAvailableTimes(times);
      if (times.length > 0 && !times.includes(time)) {
        setTime('');
      }
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!occasion || !date || !time || guests < 1) {
      alert('Please fill in all fields');
      return;
    }

    const formData = {
      occasion,
      date,
      time,
      guests
    };
    
    onSubmit(formData);
  };

  const handleGuestsChange = (increment) => {
    setGuests(prev => Math.max(1, prev + increment));
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" aria-label="Table reservation form">
      <div className="form-group">
        <label htmlFor="occasion">Occassion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select occasion</option>
          <option value="Birthday Celebration">Birthday Celebration</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business Meeting">Business Meeting</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">Event Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-required="true"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
          disabled={!date || availableTimes.length === 0}
        >
          <option value="">Select time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <div className="guest-counter">
          <button 
            type="button" 
            onClick={() => handleGuestsChange(-1)}
            aria-label="Decrease guest count"
          >
            -
          </button>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            max="20"
            required
            aria-required="true"
          />
          <button 
            type="button" 
            onClick={() => handleGuestsChange(1)}
            aria-label="Increase guest count"
          >
            +
          </button>
        </div>
      </div>

      <button type="submit" className="submit-btn" aria-label="Submit reservation">
        Checkout Button
      </button>
    </form>
  );
};

export default BookingForm;
