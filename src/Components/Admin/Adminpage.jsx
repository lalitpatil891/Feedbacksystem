import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
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
          <Link to="/">
            <button>Logout</button>
          </Link>
        </ul>
      </nav>
      <footer>
      @Lalit
      </footer>
      {/*--- HOME Content ---*/}
      <div class="container">
        <h2>Feedback's <small></small></h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-2">Name</div>
            <div className="col col-3">Birth Date</div>
            <div class="col col-4">Mobile No.</div>
            <div class="col col-5">Email ID</div>
            <div class="col col-6">Model/Series</div>
            <div class="col col-7">Brand</div>
            <div class="col col-8">Photos</div>
          </li>
          <li class="table-row">
            <div class="col col-1" data-label="Job Id">42235</div>
            <div class="col col-2" data-label="Customer Name">John Doe</div>
            <div class="col col-3" data-label="Amount">$350</div>
            <div class="col col-4" data-label="Payment Status">Pending</div>
            <div class="col col-5" data-label="Job Id">42235</div>
            <div class="col col-6" data-label="Customer Name">John Doe</div>
            <div class="col col-7" data-label="Amount">$350</div>
            <div class="col col-8" data-label="Payment Status">Pending</div>
          </li>
          <li class="table-row">
            <div class="col col-1" data-label="Job Id">42442</div>
            <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
            <div class="col col-3" data-label="Amount">$220</div>
            <div class="col col-4" data-label="Payment Status">Pending</div>
            <div class="col col-5" data-label="Job Id">42235</div>
            <div class="col col-6" data-label="Customer Name">John Doe</div>
            <div class="col col-7" data-label="Amount">$350</div>
            <div class="col col-8" data-label="Payment Status">Pending</div>
          </li>
         
        </ul>
      </div>


    </>
  )
}

export default Admin
