import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <nav className='nav-container'>
        <div className='left-nav'>
          <Link to="/"> <div className='brand'>Feedback System</div></Link>
          {/* <div className='btn2'> */}
          {/* <button className='view'>View Your Feedback </button> */}
        </div>

        <ul>
          <p>@UserName</p>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </ul>
      </nav>
      <footer>
        @Lalit
      </footer>
{/*--- HOME Content ---*/}
      <div className='home-content'>
        <div className='right'>
          <div> <img src="/Images/icon.png" alt="Paris" className="center"></img></div>
        </div>
        <div className='left'>
          <div className='title-bolt'>Time for Feedback</div>
          <div className='title-disc'>Please provide your feedback on the <span>mobile phones</span> or <span>laptops</span> that you are currently using.</div>
          <div className='feed-btn'>
            <Link to="/Feedback"><button>Click here to add your Feedback</button></Link>
          </div>
          {/* <div className='title-disc'>If you submmit feedback then view here.</div>
        <div className='feed-btn'>
          <label>
            Enter your Email<br />
            <input name="myInput" placeholder='Enter your Email/Mobile Number' />
          </label>
          <button>View your Feedback</button></div> */}
        </div>
      </div>
    </>
  )
}

export default Home
