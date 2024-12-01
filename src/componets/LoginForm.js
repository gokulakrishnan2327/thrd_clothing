// import React, { useState } from 'react';

const LoginForm = ({ handleLogin, loginError }) => {
    return (
        <div className="login">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                id="username"
                className="input"
            />
            <input
                type="password"
                placeholder="Password"
                id="password"
                className="input"
            />
            <button
                className="login-button"
                onClick={() => {
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
                    handleLogin(username, password);
                }}
            >
                Login
            </button>
            {loginError && <p className="error">{loginError}</p>}
        </div>
    );
};

export default LoginForm;
