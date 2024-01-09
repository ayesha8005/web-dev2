const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.links a');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    menuClose();
  });
});

function menuClose() {
  menu.classList.remove('open');
  toggleBtn.classList.remove('open');
}

// Smooth scrolling when clicking on navigation links
document.querySelectorAll('.links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // Close the menu on small screens
      if (window.innerWidth < 768) {
        menuClose();
      }
    }
  });
});

// Close menu on window resize for responsiveness
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menuClose();
  }
});
