const leftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('leftAnimate');
    }
  });
});
leftObserver.observe(document.querySelector('#profile'));
leftObserver.observe(document.querySelector('#jobs1'));

const rightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rightAnimate');
    }
  });
});
rightObserver.observe(document.querySelector('#Stats'));
rightObserver.observe(document.querySelector('#attributes'));
rightObserver.observe(document.querySelector('#jobs2'));