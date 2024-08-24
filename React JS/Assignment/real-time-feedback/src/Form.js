import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateName = (name) => {
    return name.length < 3 ? 'Name must be at least 3 characters long.' : '';
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(email) ? 'Invalid email address.' : '';
  };

  const validatePassword = (password) => {
    return password.length < 6 ? 'Password must be at least 6 characters long.' : '';
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    let errorMessage = '';
    if (id === 'name') {
      errorMessage = validateName(value);
    } else if (id === 'email') {
      errorMessage = validateEmail(value);
    } else if (id === 'password') {
      errorMessage = validatePassword(value);
    }

    setErrors({ ...errors, [id]: errorMessage });
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit" disabled={Object.values(errors).some(error => error)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
