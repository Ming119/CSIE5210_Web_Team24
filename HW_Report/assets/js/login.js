import { getCookie, setCookie } from './cookies.js';

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        if (username !== "test" || password !== "test") {
            alert('密碼錯誤');
            return;
        }
        setCookie('currentUser', username, 7);
        
        let countdown = 3;
        const notificationBanner = document.getElementById('notificationBanner');
        notificationBanner.style.display = 'block';
        notificationBanner.textContent = `登入成功！${countdown} 秒後將跳轉到首頁`;

        const countdownInterval = setInterval(() => {
            countdown--;
            notificationBanner.textContent = `登入成功！${countdown} 秒後將跳轉到首頁`;
            if (countdown === 0) {
                clearInterval(countdownInterval);
                window.location.href = 'index.html';
            }
        }, 1000);
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
