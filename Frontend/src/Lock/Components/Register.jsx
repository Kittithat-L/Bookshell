import React  from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
const Register = () => {

    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");  
    };

return (
<div className = 'Big'>
    <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="BOX">
            <input type="text"
                placeholder='Email' required/>
                <MdOutlineMail className='icon' />
                </div>
            <div className="BOX">
                <input type="text"
                placeholder='Username' required /> 
                <FaUser className='icon' />
            </div>
            <div className="BOX">
                <input type="Password"
                placeholder='Password' required /> 
                <FaLock className='icon' />
            </div>
            <div className="BOX">
                <input type="Password"
                placeholder='ConfirmPassword' required /> 
                <FaLock className='icon' />
            </div>
            <div className="BOX">
                <input type="tel"
                placeholder='Phone' required /> 
                <MdOutlineLocalPhone  className='icon'/>
            </div>
            <button type="submit">Sign up</button>

    </form>

</div>
);
};
export default Register;