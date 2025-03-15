import React, { useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className='Big'>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="BOX">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <MdOutlineMail className="icon" />
        </div>
        <div className="BOX">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="BOX">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="BOX">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="BOX">
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <MdOutlineLocalPhone className="icon" />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
