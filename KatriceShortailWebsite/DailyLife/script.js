const leftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('leftAnimate');
    }
  });
});
leftObserver.observe(document.querySelector('#story1'));
leftObserver.observe(document.querySelector('#story3'));
leftObserver.observe(document.querySelector('#story5'));
leftObserver.observe(document.querySelector('#story7'));
leftObserver.observe(document.querySelector('#story9'));
leftObserver.observe(document.querySelector('#conclusion'));


const rightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rightAnimate');
    }
  });
});
rightObserver.observe(document.querySelector('#story2'));
rightObserver.observe(document.querySelector('#story4'));
rightObserver.observe(document.querySelector('#story6'));
rightObserver.observe(document.querySelector('#story8'));
rightObserver.observe(document.querySelector('#story10'));

const storiesObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('storiesAnimate');
    }
  });
});
storiesObserver.observe(document.querySelector('#stories'));


const star1Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('star1Animate');
    }
  });
});
star1Observer.observe(document.querySelector('#stars'));