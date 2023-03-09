import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_ROUTE } from "../../common/endpoints";
import makeRequest from "../../utils/makeRequest";

import "./RegisterPage.css";

const RegisterPage = () => {
    
    const registerForm = useRef();
    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(registerForm)
        const registerFormData = {
            email: registerForm.current.email.value,
            password: registerForm.current.password.value
        }
        console.log(registerFormData)
        makeRequest(REGISTER_ROUTE(registerFormData))
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
        <div className="register-page">
            <div className="welcome-image">
                <img src="" alt="Welcome Image" />
            </div>
            <div className="form-wrapper">
                <div className="welcome-text">Login to your CMS+ account</div>
                <form className="register-form" onSubmit={registerHandler} ref={registerForm}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Register</button>
                    <a href="/login" className="login-link">Login</a>
                </form>
            </div>
        </div>
    );
}

RegisterPage.propTypes = {};

export default RegisterPage;