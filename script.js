
document.getElementById('scrollToGames').addEventListener('click', function (e) {
  e.preventDefault();
  const carousel = document.getElementById('workCarousel');
  const carouselRect = carousel.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = carouselRect.top + scrollTop - (window.innerHeight / 2) + (carousel.offsetHeight / 2);

  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const feedback = document.getElementById('formFeedback');

  if (name === '' || email === '' || message === '') {
    feedback.className = 'text-warning mb-3 fw-bold'; 
    feedback.textContent = 'Please fill out all fields before sending!';
  } else {
    feedback.className = 'text-success mb-3 fw-bold'; 
    feedback.textContent = 'Message sent successfully!';
    this.reset(); 
  }
});


const currentHour = new Date().getHours();
let greetingText = "Hello!";

if (currentHour < 12) {
  greetingText = "Good morning";
} else if (currentHour < 18) {
  greetingText = "Good afternoon";
} else {
  greetingText = "Good evening";
}

document.getElementById('timeGreeting').textContent = greetingText;


const scrollBtn = document.getElementById('dynamicScrollBtn');
const contactSection = document.querySelector('.contact-box') || document.getElementById('contactForm');

window.addEventListener('scroll', function() {
  if (!contactSection || !scrollBtn) return; 

  const contactPos = contactSection.getBoundingClientRect().top;
  const currentMode = scrollBtn.getAttribute('data-mode');
  let newMode = (contactPos < window.innerHeight / 2) ? 'top' : 'contact';

  if (newMode !== currentMode) {
    scrollBtn.setAttribute('data-mode', newMode);
    scrollBtn.textContent = (newMode === 'top') ? "Homepage" : "Contact Me";
    
    scrollBtn.classList.add('btn-transition-flash');
    setTimeout(() => {
      scrollBtn.classList.remove('btn-transition-flash');
    }, 300);
  }
});

scrollBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const mode = this.getAttribute('data-mode');
  
  if (mode === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
