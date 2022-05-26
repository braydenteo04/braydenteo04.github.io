const introFadeIn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('introFadeIn');
      }
    });
  });
  introFadeIn.observe(document.querySelector('#introduction'));
  introFadeIn.observe(document.querySelector('#dailies'));
  introFadeIn.observe(document.querySelector('#jobs'));
  introFadeIn.observe(document.querySelector('#DRKtitle'));
  introFadeIn.observe(document.querySelector('#DRK'));
  introFadeIn.observe(document.querySelector('#RPRtitle'));
  introFadeIn.observe(document.querySelector('#RPR'));


  const whatdoIdo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('whatDoIDo');
      }
    });
  });
  whatdoIdo.observe(document.querySelector('#whatdoido'));
  whatdoIdo.observe(document.querySelector('#SGEtitle'));
  whatdoIdo.observe(document.querySelector('#SGE'));
  
  const imgLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('imgLeft');
      }
    });
  });
  imgLeft.observe(document.querySelector('#moon'));
  imgLeft.observe(document.querySelector('#Place3'));
  imgLeft.observe(document.querySelector('#friend1'));
  imgLeft.observe(document.querySelector('#friend3'));



  const imgRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('imgRight');
      }
    });
  });
  imgRight.observe(document.querySelector('#EdgeOfUniverse'));
  imgRight.observe(document.querySelector('#Place4'));
  imgRight.observe(document.querySelector('#friend2'));
  imgRight.observe(document.querySelector('#friend4'));

  const conclusionFadeIn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('conclusionFadeIn');
      }
    });
  });
  conclusionFadeIn.observe(document.querySelector('#conclusion'));