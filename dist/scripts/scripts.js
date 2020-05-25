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
    navUL = document.getElementById('navUL'),
    body = document.body,
    nameInput = document.getElementById('name'),
    emailInput = document.getElementById('email'),
    companyInput = document.getElementById('company'),
    messageInput = document.getElementById('message'),
    nameLabel = document.getElementById('name-label'),
    emailLabel = document.getElementById('email-label'),
    companyLabel = document.getElementById('company-label'),
    messageLabel = document.getElementById('message-label');

  const labelShow = e => {
    const elem = e.target.id;
    console.log(elem);
    if (elem === 'name') {
      nameLabel.classList.add('show');
      nameInput.placeholder = '';
    } else if (elem === 'email') {
      emailLabel.classList.add('show');
      emailInput.placeholder = '';
    } else if (elem === 'company') {
      companyLabel.classList.add('show');
      companyInput.placeholder = '';
    } else if (elem === 'message') {
      messageLabel.classList.add('show');
      messageInput.placeholder = '';
    }
  };

  nameInput.addEventListener('click', labelShow);
  emailInput.addEventListener('click', labelShow);
  companyInput.addEventListener('click', labelShow);
  messageInput.addEventListener('click', labelShow);

  /* ---------------------------------------------------------------- */
  // Slide in navbar, intro, on page load
  window.addEventListener('load', () => {
    navbar.classList.add('show');
    intro.classList.add('show');
  });

  /* ---------------------------------------------------------------- */
  // Fade in about and contact on scroll position
  window.addEventListener('scroll', () => {
    // get position of page sections relative to top left corner of browser
    const projectSec = projects.getBoundingClientRect().top,
      aboutSec = about.getBoundingClientRect().top,
      contactSec = contact.getBoundingClientRect().top,
      scrollPos = window.innerHeight;

    // if the position of the top of the section in question (projecsec, aboutsec, contactsec) is less than or equal to half  or 2/3 the height of the window (i.e., it is in the middle of the window), add show class to make it visible
    // Initially, on a standard 1920x1080p screen, these sections have a greater top value than the window height
    if (projectSec <= scrollPos / 2) {
      projects.classList.add('show');
    }

    if (aboutSec <= scrollPos / (3 / 2)) {
      about.classList.add('show');
    }

    if (contactSec <= scrollPos / (3 / 2)) {
      contact.classList.add('show');
    }
  });

  /* ---------------------------------------------------------------- */
  // nav dropdown click
  menubtn.addEventListener('click', e => {
    if (!navbar.classList.contains('responsiveIn')) {
      body.classList.add('no-overflow');

      menubtn.classList.add('rotate');
      navbar.classList.add('responsiveIn');
      // Ensures the nav bar has "opened" all the way before the links appear
      setTimeout(() => {
        navbar.classList.add('liIn');
      }, 300);
    } else {
      body.classList.remove('no-overflow');

      // remove responsive "in" classes
      menubtn.classList.remove('rotate');
      // navbar.classList.remove('responsiveIn');
      navbar.classList.remove('liIn');
      navbar.classList.remove('responsiveIn');
    }
  });

  /* ---------------------------------------------------------------- */
  // This is necessary to remove the nav bar on mobile when a link is clicked.
  // Otherwise, the link doesn't get removed.
  navUL.addEventListener('click', e => {
    // remove responsive "in" classes and hamburger icon rotate class
    body.classList.remove('no-overflow');

    if (e.target.classList.contains('link')) {
      navbar.classList.remove('responsiveIn');
      navbar.classList.remove('liIn');
      menubtn.classList.remove('rotate');
    }
  });

  /* ---------------------------------------------------------------- */
  // Smooth Scroll
  const scroll = new SmoothScroll('a[href*="#"', {
    header: '[data-scroll-header]',
    speed: 500,
    speedAsDuration: true,
  });
})();
