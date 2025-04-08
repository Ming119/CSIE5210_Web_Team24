// index.js
import { setCookie, getCookie } from './cookies.js';

function logout() {
	setCookie('currentUser', '', -1);
	window.location.href = 'index';
}

function openLoginPage() {
	window.location.href = 'login';
}

function updateNav() {
	const userStatus = document.getElementById('userStatus');
	const currentUser = getCookie('currentUser');
	
	if (currentUser) {
		userStatus.innerHTML = `
				<span>歡迎, ${currentUser}</span>
				<button class="logoutBtn" onclick="logout()">登出</button>
		`;
		const logoutBtn = userStatus.querySelector('.logoutBtn');
		if (logoutBtn) {
			logoutBtn.addEventListener('click', logout);
		}
	} else {
		userStatus.innerHTML = `
				<button class="loginBtn" onclick="window.location.href='login'">登入</button>
		`;
	}
}

window.addEventListener('load', function() {
	updateNav();
});