// =========================================
// Prompt Diva™ — Main JavaScript
// =========================================

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScrollY = scrollY;
});

// --- Scroll Animations (Intersection Observer) ---
const fadeElements = document.querySelectorAll('.fade-up');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add stagger delay based on element's position among siblings
      const siblings = entry.target.parentElement.querySelectorAll('.fade-up');
      const siblingIndex = Array.from(siblings).indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, siblingIndex * 100);
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// --- Strategy Form Handler ---
const strategyForm = document.getElementById('strategyForm');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function handleFormSubmit(e, formEl) {
  e.preventDefault();
  
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData.entries());
  
  // Log the submission (in production, this would send to an API)
  console.log('Strategy request:', data);
  
  // Store in localStorage for later retrieval
  const submissions = JSON.parse(localStorage.getItem('pd_submissions') || '[]');
  submissions.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('pd_submissions', JSON.stringify(submissions));
  
  // Show success message
  if (formEl) formEl.style.display = 'none';
  const successEl = formEl?.parentElement?.querySelector('.form-success') || document.getElementById('formSuccess');
  if (successEl) successEl.style.display = 'block';
}

if (strategyForm) {
  strategyForm.addEventListener('submit', (e) => handleFormSubmit(e, strategyForm));
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => handleFormSubmit(e, contactForm));
}

// --- Smooth Scroll for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Active Nav Link ---
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

// --- Trigger initial animations for above-fold elements ---
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-section .fade-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 150);
  });
});