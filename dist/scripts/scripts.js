(function main() {
  // get constant update for year
  document.getElementById('year').innerHTML = new Date().getFullYear();

  /* ---------------------------------------------------------------- */
  //dropdown toggle
  const menubtn = document.getElementById('menubtn'),
    navbar = document.getElementById('nav'),
    intro = document.getElementById('intro'),
    projects = document.getElementById('projects'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact'),
    navUL = document.getElementById('navUL');

  /* ---------------------------------------------------------------- */
  // Slide in navbar, intro, on page load
  window.onload = () => {
    navbar.classList.add('show');
    intro.classList.add('show');
    projects.classList.add('show');
  };

  /* ---------------------------------------------------------------- */
  // Fade in about and contact on scroll position
  window.addEventListener('scroll', () => {
    // Find position of top of scroll bar
    let scrollPosition = this.scrollY;
    // get height of client window
    let bodyHeight = document.body.scrollHeight;
    // roughly 1/3 of the way down
    if (scrollPosition >= parseInt(bodyHeight / 3.1)) {
      about.classList.add('show');
    }
    // roughly 3/4 of the way down
    if (scrollPosition >= parseInt(bodyHeight / 3 + bodyHeight * 0.25)) {
      contact.classList.add('show');
    }
  });

  /* ---------------------------------------------------------------- */
  // nav dropdown click
  menubtn.addEventListener('click', e => {
    if (!navbar.classList.contains('responsiveIn')) {
      menubtn.classList.add('rotate');
      navbar.classList.add('responsiveIn');
      // add li in class 300 ms into nav bar scroll down
      // Ensures the nav bar has "opened" all the way before the links appear
      setTimeout(() => {
        navbar.classList.add('liIn');
      }, 300);
    } else {
      // remove responsive "in" classes
      menubtn.classList.remove('rotate');

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

  /* ---------------------------------------------------------------- */
  // This is necessary to remove the nav bar on mobile when a link is clicked.
  // Otherwise, the link doesn't get removed.
  navUL.addEventListener('click', e => {
    // remove responsive "in" classes
    if (e.target.classList.contains('link')) {
      navbar.classList.remove('responsiveIn');
      navbar.classList.remove('liIn');
      menubtn.classList.remove('rotate');

      // add responsive "out" classes, with li 300ms afterwards
      navbar.classList.add('responsiveOut');
      navbar.classList.add('liOut');

      setTimeout(() => {
        navbar.classList.remove('responsiveOut');
        navbar.classList.remove('liOut');
      }, 401);
    }
  });

  /* ---------------------------------------------------------------- */
  // Smooth Scroll
  const scroll = new SmoothScroll('a[href*="#"', {
    header: '[data-scroll-header]',
    speed: 500,
    speedAsDuration: true
  });
})();
