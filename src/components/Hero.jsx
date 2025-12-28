import heroImage from '../assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg';

const Hero = ({ onBookTable }) => {
  return (
    <section className="hero" aria-label="Restaurant introduction">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button 
            className="cta-button" 
            onClick={onBookTable}
            aria-label="Book a table at Little Lemon"
          >
            Book a Table
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Delicious Mediterranean food served at Little Lemon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
