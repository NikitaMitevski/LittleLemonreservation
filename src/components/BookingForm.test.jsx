import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { fetchAPI } from '../utils/api';

describe('BookingForm', () => {
  it('renders form with all required fields', () => {
    const mockSubmit = () => {};
    render(<BookingForm onSubmit={mockSubmit} />);
    
    // Check if all form fields are present
    expect(screen.getByLabelText(/occassion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/event date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit reservation/i })).toBeInTheDocument();
  });

  it('updates available times when date is selected', async () => {
    const mockSubmit = () => {};
    render(<BookingForm onSubmit={mockSubmit} />);
    
    const dateInput = screen.getByLabelText(/event date/i);
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: dateString } });
    
    await waitFor(() => {
      const timeSelect = screen.getByLabelText(/time/i);
      expect(timeSelect).not.toBeDisabled();
    });
  });

  it('submits form with correct data', async () => {
    let submittedData = null;
    const mockSubmit = (data) => {
      submittedData = data;
    };
    
    render(<BookingForm onSubmit={mockSubmit} />);
    
    // Fill in the form
    const occasionSelect = screen.getByLabelText(/occassion/i);
    fireEvent.change(occasionSelect, { target: { value: 'Birthday Celebration' } });
    
    const dateInput = screen.getByLabelText(/event date/i);
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: dateString } });
    
    // Wait for times to load and select one
    await waitFor(() => {
      const timeSelect = screen.getByLabelText(/time/i);
      expect(timeSelect).not.toBeDisabled();
    });
    
    const timeSelect = screen.getByLabelText(/time/i);
    const timeOptions = timeSelect.querySelectorAll('option');
    if (timeOptions.length > 1) {
      fireEvent.change(timeSelect, { target: { value: timeOptions[1].value } });
    }
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '4' } });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit reservation/i });
    fireEvent.click(submitButton);
    
    // Check if data was submitted
    await waitFor(() => {
      expect(submittedData).toBeTruthy();
    });
  });

  it('increments and decrements guest count', () => {
    const mockSubmit = () => {};
    render(<BookingForm onSubmit={mockSubmit} />);
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const incrementButton = screen.getByLabelText(/increase guest count/i);
    const decrementButton = screen.getByLabelText(/decrease guest count/i);
    
    expect(guestsInput.value).toBe('1');
    
    fireEvent.click(incrementButton);
    expect(guestsInput.value).toBe('2');
    
    fireEvent.click(incrementButton);
    expect(guestsInput.value).toBe('3');
    
    fireEvent.click(decrementButton);
    expect(guestsInput.value).toBe('2');
  });
});
