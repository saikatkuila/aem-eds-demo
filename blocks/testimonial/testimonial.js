export default function decorate(block) {
  // Ensure testimonial class is present
  block.classList.add('testimonial');

  const toggle = block.querySelector('.expand-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = block.getAttribute('data-state') === 'expanded';
      block.setAttribute('data-state', expanded ? 'collapsed' : 'expanded');
      toggle.textContent = expanded ? 'Read More' : 'Collapse';
    });
  }

  // Optional: scroll into view on hover for accessibility
  block.addEventListener('mouseenter', () => {
    block.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
