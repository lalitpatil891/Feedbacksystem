'use client'
import { useState } from "react";
import Login from "../Admin/Login";
import SignUp from "../Admin/SignUp";

const Admin = () => {
    const [login, setLogin]=useState(true)
    return (
        <>
        <h1>Login/Signup</h1>
        <div className="login-container-main">
            
            {
                login? <Login/> : <SignUp/>
            }
        
            <p onClick={() =>setLogin(!login)}>
            {login? " Do not have account? SignUp" : " Already have account? Login"}</p>
        </div>
        </>
    )
}

export default Admin;