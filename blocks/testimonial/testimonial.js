export default function decorate(block) {
  const quote = block.querySelector('p');
  const author = document.createElement('p');
  author.className = 'testimonial-author';
  author.textContent = block.dataset.author;

  const designation = document.createElement('p');
  designation.className = 'testimonial-designation';
  designation.textContent = block.dataset.designation;

  block.innerHTML = '';
  block.append(quote, author, designation);
}
