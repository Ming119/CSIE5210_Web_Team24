import { getCookie, setCookie } from './cookies.js';

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        if (password !== "12345678") {
            alert('密碼錯誤');
            return;
        }
        setCookie('currentUser', username, 7);
        window.location.href = 'index.html';
    } else {
        alert('請輸入用戶名和密碼');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

window.addEventListener('load', function() {
    const currentUser = getCookie('currentUser');
    if (currentUser) {
        window.location.href = 'index.html';
    }
});

export { handleLogin }; // Export if needed elsewhere
