export default function decorate(block) {
  block.classList.add('testimonial');

  // Avatar fallback
  const authorEl = block.querySelector('.author');
  const fallback = block.querySelector('.avatar-fallback');
  const avatar = block.querySelector('.avatar');
  if (authorEl && fallback && avatar) {
    const initials = authorEl.textContent.trim().split(' ').map(n => n[0]).join('').slice(0, 2);
    fallback.textContent = initials.toUpperCase();
    avatar.addEventListener('error', () => {
      avatar.style.display = 'none';
      fallback.style.display = 'flex';
    });
  }

  const toggle = block.querySelector('.expand-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = block.getAttribute('data-state') === 'expanded';
      block.setAttribute('data-state', expanded ? 'collapsed' : 'expanded');
      toggle.setAttribute('aria-expanded', !expanded);
      toggle.textContent = expanded ? 'Read More' : 'Collapse';
    });
  }

  // Auto-slide if multiple testimonials on page (optional)
  const all = document.querySelectorAll('.testimonial');
  if (all.length > 1) {
    let idx = 0;
    setInterval(() => {
      all.forEach((el, i) => {
        el.style.opacity = i === idx ? '1' : '0.2';
        el.style.transition = 'opacity 0.5s ease';
      });
      idx = (idx + 1) % all.length;
    }, 7000);
  }
}
