import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import '../assets/css/register.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirm: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.username.trim()) {
            errors.username = '請輸入使用者名稱';
        }

        if (!formData.email.trim()) {
            errors.email = '請輸入電子郵件';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = '請輸入有效的電子郵件地址';
        }

        if (!formData.password) {
            errors.password = '請輸入密碼';
        } else if (formData.password.length < 6) {
            errors.password = '密碼長度至少為 6 個字符';
        }

        if (formData.password !== formData.password_confirm) {
            errors.password_confirm = '兩次輸入的密碼不一致';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log('註冊資料:', formData);

            navigate('/login');
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className={`register-page ${darkMode ? 'dark-mode' : ''}`}>
            <div className="register-container">
                <h1>會員註冊</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">使用者名稱</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {formErrors.username && <p className="error">{formErrors.username}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">電子郵件</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">密碼</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {formErrors.password && <p className="error">{formErrors.password}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_confirm">確認密碼</label>
                        <input
                            type="password"
                            id="password_confirm"
                            name="password_confirm"
                            value={formData.password_confirm}
                            onChange={handleChange}
                        />
                        {formErrors.password_confirm && <p className="error">{formErrors.password_confirm}</p>}
                    </div>

                    <button type="submit">註冊</button>
                </form>

                <div className="login-link">
                    <Link to="/login">已經有帳號了？按這裡登入</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;