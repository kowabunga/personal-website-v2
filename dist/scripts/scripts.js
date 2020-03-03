(function main() {
  // get constant update for year
  document.getElementById('year').innerHTML = new Date().getFullYear();

  /* ---------------------------------------------------------------- */
  //dropdown toggle
  const menubtn = document.getElementById('menubtn'),
    navbar = document.getElementById('nav'),
    body = document.body;

  // add show class on load
  window.onload = () => {
    navbar.classList.add('show');
  };
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
  // account for navbar height when scroll-jumping on nav link click
  window.addEventListener('hashchange', () => scrollBy(0, -80));
})();
