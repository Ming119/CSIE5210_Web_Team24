// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const section = document.querySelector(this.getAttribute('href'));
		section.scrollIntoView({ behavior: 'smooth' });
		navLinks.classList.remove('active'); // Close menu on click (mobile)
	});
});