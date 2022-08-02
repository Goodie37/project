let handburger = document.querySelector('.header .nav-bar .nav-list .dunno');
let mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

handburger.addEventListener('click', () => {
	handburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});



document.addEventListener('scroll', () => {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 650) {
		header.style.backgroundColor = 'gray';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		handburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	});
});