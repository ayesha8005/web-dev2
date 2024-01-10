// Selecting all elements with class 'myslide' and 'dot'
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');

// Initializing counter for slide index
let counter = 1;

// Initial slide display
slidefun(counter);

// Setting up an interval for automatic sliding
let timer = setInterval(autoSlide, 8000);

// Function for automatic sliding
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

// Function for navigating to next or previous slide
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}

// Function for navigating to a specific slide
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}

// Function to reset the timer when manual navigation occurs
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

// Function to handle slide display
function slidefun(n) {
	let i;
	
	// Hide all slides
	for(i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}
	
	// Remove 'active' class from all dots
	for(i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	
	// Check if counter exceeds the number of slides
	if(n > myslide.length) {
	   counter = 1;
	}
	
	// Check if counter is less than 1
	if(n < 1) {
	   counter = myslide.length;
	}
	
	// Display the current slide and set 'active' class to its corresponding dot
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

// Selecting toggle button, menu, and navigation links
const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.links a');

// Event listener for toggle button click
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

// Event listener for navigation link click
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    menuClose();
  });
});

// Function to close the menu
function menuClose() {
  menu.classList.remove('open');
  toggleBtn.classList.remove('open');
}

// Smooth scrolling when clicking on navigation links
document.querySelectorAll('.links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element id from the href attribute
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll smoothly to the target element
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
