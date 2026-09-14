document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Scroll Animations (Intersection Observer)
  // This watches elements as you scroll down and fades them in smoothly.
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the item is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));

  // 2. Pricing Slider Logic
  // Handles the left and right arrow clicks for the pricing tier cards
  const slider = document.getElementById('pricingSlider');
  const btnLeft = document.getElementById('slideLeft');
  const btnRight = document.getElementById('slideRight');

  if (slider && btnLeft && btnRight) {
    // Scroll amount is roughly the width of one card plus gap
    const scrollAmount = 320; 

    btnLeft.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});
