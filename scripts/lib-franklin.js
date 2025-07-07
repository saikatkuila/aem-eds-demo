export function decorateBlocks(main) {
  main.querySelectorAll('div[class]').forEach((block) => {
    const classes = Array.from(block.classList);
    if (classes.length > 0 && !block.classList.contains('block')) {
      block.classList.add('block');
    }
  });
}