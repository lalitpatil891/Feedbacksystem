import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='nav-container'>
                <div className='left-nav'>
                    <Link to="/"> <div className='brand'>Feedback System</div></Link>
                    {/* <button className='view'>View Your Feedback </button> */}
                </div>

                <ul>
                    <p>@UserName</p>
                    <Link to="/Page">
                        <button>Login</button>
                    </Link>
                </ul>
            </nav>
            <footer>
              @Lalit
            </footer>
        </>
    )
}

export default Navbar
