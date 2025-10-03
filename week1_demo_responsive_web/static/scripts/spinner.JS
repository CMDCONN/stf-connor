// Got this spinner code from another project

const spinner = document.getElementById('spinner');

spinner.addEventListener('mouseenter', () => {
  if (spinner.classList.contains('spin-animation')) return;
  
  spinner.classList.add('spin-animation');
});

spinner.addEventListener('animationend', () => {
  spinner.classList.remove('spin-animation');
});


