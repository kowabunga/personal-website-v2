(function main() {
  // get constant update for year
  document.getElementById('year').innerHTML = new Date().getFullYear();

  /* ---------------------------------------------------------------- */
  //dropdown toggle
  const menubtn = document.getElementById('menubtn'),
    navbar = document.getElementById('nav'),
    intro = document.getElementById('frontpage'),
    projects = document.getElementById('projects'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

  // Slide in navbar, intro, on page load
  window.onload = () => {
    navbar.classList.add('show');
    intro.classList.add('show');
    projects.classList.add('show');
  };
  // Fade in about and contact on scroll position
  window.addEventListener('scroll', e => {
    let scrollPosition = this.scrollY;
    let bodyHeight = document.body.clientHeight;
    // roughly half of the way down
    if (scrollPosition >= parseInt(bodyHeight / 2.5)) {
      about.classList.add('show');
    }
    // roughly 3/4 of the way down
    if (scrollPosition >= parseInt(bodyHeight / 2.5 + bodyHeight * 0.25)) {
      contact.classList.add('show');
    }
    console.log(document.body.clientHeight);
  });

  /* ---------------------------------------------------------------- */
  // nav dropdown click
  menubtn.addEventListener('click', e => {
    console.log(e.target);
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
