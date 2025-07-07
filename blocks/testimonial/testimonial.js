export default function decorate(block) {
  block.classList.add('testimonial');

  const toggle = block.querySelector('.expand-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = block.getAttribute('data-state') === 'expanded';
      block.setAttribute('data-state', expanded ? 'collapsed' : 'expanded');
      toggle.textContent = expanded ? 'Read More' : 'Collapse';
    });
  }

  // Optional: auto-slide if multiple testimonials on page
  const allTestimonials = document.querySelectorAll('.testimonial');
  if (allTestimonials.length > 1) {
    let index = 0;
    setInterval(() => {
      allTestimonials.forEach((el, i) => {
        el.style.opacity = i === index ? '1' : '0.3';
        el.style.transition = 'opacity 0.6s ease';
      });
      index = (index + 1) % allTestimonials.length;
    }, 6000);
  }
}
