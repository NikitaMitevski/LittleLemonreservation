import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BookingPage from './components/BookingPage'
import ConfirmationPage from './components/ConfirmationPage'
import SuccessPage from './components/SuccessPage'
import { submitAPI } from './utils/api'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingData, setBookingData] = useState(null);

  const handleBookTable = () => {
    setCurrentPage('booking');
  };

  const handleFormSubmit = (formData) => {
    setBookingData(formData);
    setCurrentPage('confirmation');
  };

  const handleConfirmation = () => {
    const success = submitAPI(bookingData);
    if (success) {
      setCurrentPage('success');
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setBookingData(null);
  };

  const handleBackToBooking = () => {
    setCurrentPage('booking');
  };

  return (
    <div className="App">
      <Header />
      
      <main>
        {currentPage === 'home' && (
          <Hero onBookTable={handleBookTable} />
        )}
        
        {currentPage === 'booking' && (
          <BookingPage 
            onSubmit={handleFormSubmit}
            onBack={handleBackToHome}
          />
        )}
        
        {currentPage === 'confirmation' && (
          <ConfirmationPage 
            bookingData={bookingData}
            onHome={handleConfirmation}
          />
        )}
        
        {currentPage === 'success' && (
          <SuccessPage onHome={handleBackToHome} />
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
