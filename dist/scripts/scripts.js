// get constant update for year
document.getElementById('year').innerHTML = new Date().getFullYear();

/* ---------------------------------------------------------------- */
//dropdown toggle
const menubtn = document.getElementById('menubtn'),
  navbar = document.getElementById('nav');

/* ---------------------------------------------------------------- */
// nav dropdown click
menubtn.addEventListener('click', () => {
  if (!navbar.classList.contains('responsiveIn')) {
    navbar.classList.add('responsiveIn');
    // add li in class 300 ms into nav bar scroll down
    setTimeout(() => {
      navbar.classList.add('liIn');
    }, 300);
  } else {
    // remove responsive "in" classes
    navbar.classList.remove('responsiveIn');
    navbar.classList.remove('liIn');

    // add responsive "out" classes, with li 300ms afterwards
    navbar.classList.add('responsiveOut');
    navbar.classList.add('liOut');

    setTimeout(() => {
      navbar.classList.remove('responsiveOut');
      navbar.classList.remove('liOut');
    }, 401);
  }
});
