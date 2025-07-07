export default function decorate(block) {
  // Add fade-in animation when block enters viewport
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      block.classList.add('fade-in');
      observer.disconnect();
    }
  }, { threshold: 0.2 });

  block.classList.add('testimonial'); // in case it’s not there
  observer.observe(block);
}
