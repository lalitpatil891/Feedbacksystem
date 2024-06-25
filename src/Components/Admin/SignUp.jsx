import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <>

            <nav className='nav-container'>
                <div className='left-nav'>
                    <Link to="/"> <div className='brand'>Feedback System</div></Link>
                </div>

                <ul>
                    {/* <p>@UserName</p> */}
                    <Link to="/">
                        {/* <button>Login</button> */}
                        <img src="./public/Images/arrow-left.png" alt="Paris"></img>
                     </Link>
                    </ul>
            </nav>
            <footer>
                Zidio internship Project - LP
            </footer>
            {/*--- Login ---*/}
            <div className="login-container">
                <h2>SignUp</h2>
                <div className="input-tags">
                    <div className="input-wrapper">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Your Name" className="input-field" />
                    </div>

                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="text" placeholder="Enter email id" className="input-field" />
                    </div>

                    <div className="input-wrapper">
                        <label>Mobile Number</label>
                        <input type="text" placeholder="Enter Mobile no" className="input-field" />
                    </div>

                    <div className="input-wrapper">
                        <label>Password</label>
                        <input type="text" placeholder="Enter Password" className="input-field" />
                    </div>

                    <div className="input-wrapper">
                        <label>Confirm Password</label>
                        <input type="text" placeholder=" Confirm Password" className="input-field" />
                    </div>
                </div>

                <div className="login-div"><button className="login-btn">Submit</button></div>

                <p className="login-bottom-links">Already have account? <Link to="/Login" className="link-login"> Login </Link></p>
            </div>
        </>

    )
}

export default Signup;
