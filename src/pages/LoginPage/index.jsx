import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../common/endpoints";
import makeRequest from "../../utils/makeRequest";

import "./LoginPage.css";

const LoginPage = () => {

    const loginForm = useRef();
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(loginForm)
        const loginFormData = {
            email: loginForm.current.email.value,
            password: loginForm.current.password.value
        }
        console.log(loginFormData)
        makeRequest(LOGIN_ROUTE(loginFormData))
            .then((res) => {
                console.log(res);
                localStorage.setItem("accessToken", res.accessToken);
                navigate("/home");
            }).catch((err) => {
                console.log(err);
                alert(err.message);
            });
    }

    return (
        <div className="login-page">
            <div className="welcome-image">
                <div className="welcome-image-text">
                    <h2>Design APIs fast,</h2>
                    <h2>Manage content easily</h2>
                </div>
                <img src="welcome-1.png" loading="lazy" alt="Welcome Image" />
            </div>
            <div className="form-wrapper">
                <div className="welcome-text">Login to your CMS+ account</div>
                <form className="login-form" onSubmit={loginHandler} ref={loginForm}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                    <a href="/register" className="register-link">Register</a>
                    <a href="">Forgot Password?</a>
                </form>
            </div>
        </div>
    );
}

LoginPage.propTypes = {};

export default LoginPage;