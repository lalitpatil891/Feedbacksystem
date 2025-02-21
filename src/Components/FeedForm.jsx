import React from 'react'
import { Link } from 'react-router-dom'

function FeedForm() {
    return (
        <>
            <nav className='nav-container'>
                <div className='left-nav'>
                    <Link to="/"> <div className='brand'>Feedback System</div></Link>
                    {/* <div className='btn2'> */}
                    {/* <button className='view'>View Your Feedback </button> */}
                </div>

                    <ul>
                    {/* <p>@UserName</p> */}
                    <Link to="/">
                        {/* <button>Login</button> */}
                        <img src="/Images/arrow-left.png" alt="Paris"></img>
                     </Link>
                    </ul>
            </nav>
            <footer>
           @Lalit
            </footer>

{/*--- feedback form ---*/}
        <div className='form-main-container'>
            <div className='left-form'>
                <div className='title-form-box'>
                    <div className='form-img'>
                        <div> <img src="/Images/icon.png" alt="Paris" className="center"></img></div>
                    </div>
                    <div className='form-title-box'>
                        <div className='form-title'>Time for Feedback</div>
                        <div className='form-disc'>Please provide your feedback on the <span>mobile phones</span> or <span>laptops</span> that you are currently using.</div>
                    </div>
                </div>
                {/* ---inputs--- */}

            </div>


            <div className='right-form'>
                <div className="input-form-tags">
                    <div className="input-form">
                        <label>Name</label>
                        <input type="text" placeholder="Enter First Name" className="input-field" />
                    </div>
                    <div className="input-form">
                        <label>Birth Date</label>
                        <input type="Date" placeholder="" className="input-field" />
                    </div>
                    <div className="input-form">
                        <label>Mobile no.</label>
                        <input type="text" placeholder="Enter Password" className="input-field" />
                    </div>

                    <div className="input-form">
                        <label>Email</label>
                        <input type="text" placeholder="Email" className="input-field" />
                    </div>

                    <div className="input-form">
                        <label>Model/Series Name</label>
                        <input type="text" placeholder="Enter your model series name" className="input-field" />
                    </div>
                    <div className="input-form">
                        <label>Brand Name</label>
                        <input type="text" placeholder="Enter brand or company name" className="input-field" />
                    </div>

                    <div className="input-form">
                        <label>Upload Photos</label>
                        <input type="file" placeholder="Email" className="input-field" />
                    </div>
                </div>

            </div>

            <div className='right-form'>
                <div className="input-form-tags">
                    <div className="input-textarea">
                        <label>Feedback</label>
                        <textarea placeholder="Enter your Feedback" rows="4" />
                    </div>
                </div>
                
            </div>

            <div className='form-submit-btn'>
                <div className='feed-submit-btn'><button>Submit</button></div>
            </div>
            
        </div>
       
            </>
    )
}

export default FeedForm
