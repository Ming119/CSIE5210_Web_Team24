import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import '../assets/css/login.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('登入資料:', formData);
        navigate('/');
    };

    return (
        <div className={`login-page ${darkMode ? 'dark-mode' : ''}`}>
            <div className="login-container">
                <h1>會員登入</h1>

                <form id="loginForm" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">登入</button>
                </form>

                <div className="register-link">
                    <Link to="/register">還沒有帳號？按這裡註冊</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;