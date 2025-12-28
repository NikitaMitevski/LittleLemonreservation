# Little Lemon Table Reservation App

A responsive table reservation application for Little Lemon restaurant built with React and Vite, featuring the Little Lemon brand identity.

## Features

### ✅ The Look (Brand Compliance)
- **Colors**: 
  - Primary Green: `#495E57`
  - Primary Yellow: `#F4CE14`
  - Secondary Light: `#EDEFEE`
- **Fonts**: 
  - Headings: Markazi Text (Google Fonts)
  - Body: Karla (Google Fonts)
- **Logo**: Little Lemon yellow logo included in assets

### ✅ The Function
- **Date Selection**: Users can select any date from today onwards
- **Dynamic Time Slots**: Available times are fetched using the `api.js` script based on selected date
- **Form Validation**: All fields are required before submission
- **Booking Flow**:
  1. Hero page with "Book a Table" CTA
  2. Booking form with occasion, date, time, and guest count
  3. Confirmation page showing booking details
  4. Success page with confirmation message

### ✅ The Code Quality
- **Clean Code**: Modular component structure
- **Accessibility**: 
  - ARIA labels on all interactive elements
  - Semantic HTML (header, main, section)
  - Keyboard navigation support
  - Focus indicators
- **Testing**: Comprehensive unit tests for BookingForm component

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation header with logo
│   ├── Hero.jsx             # Landing page hero section
│   ├── BookingForm.jsx      # Main booking form component
│   ├── BookingPage.jsx      # Booking form page
│   ├── ConfirmationPage.jsx # Booking review page
│   ├── SuccessPage.jsx      # Success confirmation page
│   └── BookingForm.test.jsx # Unit tests
├── utils/
│   └── api.js              # API functions for available times
├── assets/
│   ├── little-lemon-yellow-logo3.png
│   └── 725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg
├── App.jsx                 # Main app with routing logic
├── App.css                 # Main styles
└── index.css              # Global styles
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port)

## Testing

```bash
npm test
```

Tests include:
- Form field rendering
- Dynamic time slot updates
- Form submission with correct data
- Guest counter increment/decrement

## Build

```bash
npm run build
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities
- **Google Fonts** - Markazi Text & Karla fonts

## Accessibility Features

- All form inputs have associated labels
- ARIA labels for buttons and interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators with brand yellow color
- Disabled states for unavailable options

## Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## API

The `fetchAPI` function in `utils/api.js` generates available time slots based on the selected date using a seeded random algorithm. Time slots range from 17:00 to 23:00.

## License

This project is part of the Meta Front-End Developer Professional Certificate.

