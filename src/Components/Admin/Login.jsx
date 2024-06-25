import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://your-backend-api/login', {
                email,
                password
            });
            console.log(response.data); // Assuming your backend returns some data upon successful login
            // Redirect or set some state upon successful login
        } catch (error) {
            console.error('Login error:', error);
            // Handle error state or display error message
        }
    };

    return (
        <>
            <nav className='nav-container'>
                <div className='left-nav'>
                    <Link to="/"> <div className='brand'>Feedback System</div></Link>
                </div>
                <ul>
                    <Link to="/">
                        <img src="./public/Images/arrow-left.png" alt="Back"></img>
                    </Link>
                </ul>
            </nav>
            <footer>
                Zidio internship Project - LP
            </footer>
            <div className="login-container">
                <h2>Login</h2>
                <div className="input-tags">
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label>
                        <input
                            type="password" // Use type="password" for password fields
                            placeholder="Enter Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="login-div">
                    <button className="login-btn" onClick={handleLogin}>Login</button>
                </div>
                <p className="login-bottom-links">Do not have an account? <Link to="/SignUp" className="link-login">SignUp</Link></p>
            </div>
        </>
    );
};

export default Login;
