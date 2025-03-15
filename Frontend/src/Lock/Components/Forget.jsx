import React  from "react";
import './Forget.css'
import { useNavigate , Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

const Forget = () => {

    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/"); 
 };

return (
<div className = 'Giant'>
    <from onSubmit={handleSubmit}> 
        <h1>Forget Password</h1>
        <div className="sign">
              <p>Know your password?  <Link to="/">Sign in</Link></p>
        </div>
        <div className="Name">
        <p>Enter the email address you use to sign in and we’ll send you an email to reset your password.</p>
        </div>
        <div className="box">
            <input type="text"
                placeholder='Email' required/>
                <MdOutlineMail className='icon' />
                </div>
            <button type="submit">Sign up</button>

    </from>

</div>
);
};
export default Forget;