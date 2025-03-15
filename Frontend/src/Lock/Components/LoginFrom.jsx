import React  from "react";
import './LoginFrom.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
//
import { useNavigate , Link} from "react-router-dom";
//

const LoginFrom = () => {



    //
    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Home");
    };
    //

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Bookshell</h1>
                <div className="input-box">
                    <input type="text"
                    placeholder='Username' required /> 
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                        <input type ="password" 
                        placeholder='Password' required />
                        <FaLock className='icon' />
                        </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember me</label>
                    <p><Link to="/Forget">Forgot password?</Link></p>
                                      
                </div>
                <button type="submit">login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/Register">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginFrom;