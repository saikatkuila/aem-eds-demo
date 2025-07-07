export default function decorate(block) {
  block.classList.add('testimonial');

  // Auto-slide among multiple testimonials
  const group = document.querySelectorAll('.testimonial-card');
  if (group.length > 1) {
    let idx = 0;
    setInterval(() => {
      group.forEach((el, i) => {
        el.style.opacity = i === idx ? '1' : '0.3';
        el.style.transition = 'opacity .6s ease';
      });
      idx = (idx + 1) % group.length;
    }, 7000);
  }
}
