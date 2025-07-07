function generateAvatarImage(initials, size = 64, bg = '#2196f3', color = '#fff') {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bg}" rx="${size / 2}" />
      <text x="50%" y="50%" font-size="${size / 2}" fill="${color}" text-anchor="middle" alignment-baseline="central" font-family="Segoe UI, sans-serif" dy=".1em">${initials}</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function getRandomPastelColor() {
  const colors = ['#03a9f4', '#4db6ac', '#ffb74d', '#9575cd', '#f06292', '#81c784'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function decorate(block) {
  block.classList.add('testimonial');

  // Avatar fallback image generation
  const avatar = block.querySelector('.avatar');
  const authorEl = block.querySelector('.author');

  if (avatar && authorEl) {
    const name = authorEl.textContent.trim();
    const initials = name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
    const fallbackImg = generateAvatarImage(initials, 64, getRandomPastelColor());

    avatar.onerror = () => {
      avatar.src = fallbackImg;
    };

    if (!avatar.getAttribute('src') || avatar.getAttribute('src') === '') {
      avatar.src = fallbackImg;
    }
  }

  // Expand/collapse toggle
  const toggle = block.querySelector('.expand-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = block.getAttribute('data-state') === 'expanded';
      block.setAttribute('data-state', expanded ? 'collapsed' : 'expanded');
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.textContent = expanded ? 'Read More' : 'Collapse';
    });
  }

  // Optional: Auto-slide between multiple testimonials
  const all = document.querySelectorAll('.testimonial');
  if (all.length > 1) {
    let idx = 0;
    setInterval(() => {
      all.forEach((el, i) => {
        el.style.opacity = i === idx ? '1' : '0.2';
        el.style.transition = 'opacity 0.6s ease';
      });
      idx = (idx + 1) % all.length;
    }, 7000);
  }
}
