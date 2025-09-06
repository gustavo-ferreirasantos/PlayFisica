const header = document.querySelector("header");
const mediaMinQuery = window.matchMedia('(min-width: 900px)');

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '60px', 
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.videos',{delay:200, origin:'left', });
if (mediaMinQuery.matches) {
    sr.reveal('.home-img',{delay:200, origin:'right'});
}else{
	sr.reveal('.home-img',{delay:200, origin:'bottom'});
}
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});
