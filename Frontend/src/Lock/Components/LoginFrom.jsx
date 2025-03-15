import React, { useState, useEffect } from "react";
import './LoginFrom.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const LoginFrom = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false); 

  const navigate = useNavigate();


  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (savedRememberMe) {
      setFormData({
        username: savedUsername || '',
        password: savedPassword || ''
      });
      setRememberMe(savedRememberMe);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert(data.message);
      navigate("/home");


      if (rememberMe) {
        localStorage.setItem('username', formData.username);
        localStorage.setItem('password', formData.password);
        localStorage.setItem('rememberMe', true);
      } else {

        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
      }
    } else {
      alert(data.message);
      setFormData({
        username: '',
        password: ''
      });
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Bookshell</h1>
        <div className="input-box">
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
        <div className="input-box">
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
        <div className="remember-forget">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember me
          </label>
          <p><Link to="/forget">Forgot password?</Link></p>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
