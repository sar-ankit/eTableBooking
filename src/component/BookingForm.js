// src/BookingForm.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingForm.css'; // Import the CSS file for styling

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [message, setMessage] = useState('');
    const [bookingSummary, setBookingSummary] = useState(null);

    // Fetch available slots based on selected date
    useEffect(() => {
        if (date) {
            axios.get(`http://localhost:5000/api/availability?date=${date}`)
                .then(response => {
                    setAvailableSlots(response.data);
                })
                .catch(error => console.error('Error fetching available slots:', error));
        }
    }, [date]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!time || !availableSlots.includes(time)) {
            setMessage('Please select a valid time slot.');
            return;
        }

        const bookingDetails = { date, time, guests, name, contact };

        try {
            const response = await axios.post('http://localhost:5000/api/bookings', bookingDetails);
            if (response.status === 201) {
                setBookingSummary(bookingDetails);
                setMessage('Booking successful!');
                resetForm();
            }
        } catch (error) {
            console.error('Error in booking:', error);
            setMessage('Error in booking. Please try again.');
        }
    };

    const resetForm = () => {
        setDate('');
        setTime('');
        setGuests(1);
        setName('');
        setContact('');
        setAvailableSlots([]);
    };

    return (
        <div className="booking-form">
            <h2>Book a Table</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <select value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">Select Time</option>
                    {availableSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>
                <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" required />
                <button type="submit">Book Table</button>
            </form>
            {message && <p className="message">{message}</p>}
            {bookingSummary && (
                <div className="summary">
                    <h3>Booking Summary</h3>
                    <p>Date: {bookingSummary.date}</p>
                    <p>Time: {bookingSummary.time}</p>
                    <p>Guests: {bookingSummary.guests}</p>
                    <p>Name: {bookingSummary.name}</p>
                    <p>Contact: {bookingSummary.contact}</p>
                </div>
            )}
        </div>
    );
};

export default BookingForm;
