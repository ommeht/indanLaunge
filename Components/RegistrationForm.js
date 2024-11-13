import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrationform.css';

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate form data
  const validateForm = () => {
    const errors = {};

    // Name validation: it should not be empty
    if (!formData.name) {
      errors.name = 'Name is required';
    }

    // Email validation: it should be a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    // Phone validation: it should be a valid phone number format (example: 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, proceed with registration
    if (Object.keys(formErrors).length === 0) {
      onRegister(formData);
      setRegistered(true);
      setTimeout(() => {
        navigate('/booking-rooms', { state: { name: formData.name } });
      }, 2000); // Wait for 2 seconds before redirecting
    }
  };

  return (
    <div className="form-container">
      {registered ? (
        <div className="success-message">
          Registration complete! Redirecting to booking rooms...
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <button type="submit">Register</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
