import React, { useState } from 'react';
import './LoginPage.css';

export const LoginPage = () => {
    const [isActive, setIsActive] = useState(false); 
    const OnLoginClick = () =>{
        setIsActive(false);
    };
    const onRegisterClick=() =>{
        setIsActive(true);
    };
    return (
        <div className="contprincipal">
        <div className={`container ${isActive?"active":""}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="E-mail" required/>
                    {/* <i className="bx bxs-user"></i> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    {/* <i className="bx bxs-lock-alt"></i> */}
                </div>
                <div className="forgot-link">
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="btm" >Login</button>
                {/* <p>or Login with Social Platforms</p>
                <div className="social-icons">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-google"></i></a>
                    <a href="#"><i className="bx bxl-github"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                </div> */}
            </form>

        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    {/* <i className="bx bxs-user"></i> */}
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                    {/* <i className="bx bxs-envelope"></i> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>    
                    {/* <i className="bx bxs-lock-alt"></i> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Repear password" required/>    
                    {/* <i className="bx bxs-lock-alt"></i> */}
                </div>
                <button type="submit" className="btm" >Register</button>
                {/* <p>or Register with Social Platforms</p> */}
                {/* <div className="social-icons">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-google"></i></a>
                    <a href="#"><i className="bx bxl-github"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                </div> */}
            </form>

        </div>

        <div className="toggle-box">
            <div className="toggle-panel toggle-left">
                <h1>Hello, Welcome!</h1>
                <p>Don't have an Account?</p>
                <button className="btn register-btn" onClick={onRegisterClick}>Register</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Already have an Account?</p>
                <button className="btn login-btn" onClick={OnLoginClick}>Login</button>
            </div>
        </div>
    </div>
    </div>
    )
}