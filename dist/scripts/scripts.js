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
  } else {
    navbar.classList.remove('responsiveIn');
    navbar.classList.add('responsiveOut');

    setTimeout(() => {
      navbar.classList.remove('responsiveOut');
    }, 401);
  }
});
