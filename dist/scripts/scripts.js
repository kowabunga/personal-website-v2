/* ---------------------------------------------------------------- */
//dropdown toggle
const menubtn = document.querySelector('.menubtn'),
  navbar = document.querySelector('.navbar'),
  intro = document.querySelector('.intro'),
  projects = document.querySelector('.projects'),
  about = document.querySelector('.about'),
  contact = document.querySelector('.contact'),
  form = document.querySelector('.contactform'),
  emailInput = document.querySelector('.email-input'),
  emailLabel = document.querySelector('.email-label'),
  sentH3 = document.querySelector('.form-submit-confirmed');

//RFC 5322 Regex
const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

window.addEventListener('load', () => {
  intro.classList.add('show');
});

/* ---------------------------------------------------------------- */
// Fade in about and contact on scroll position
window.addEventListener('scroll', () => {
  // get position of page sections relative to top left corner of browser
  const introSec = intro.getBoundingClientRect(),
    projectSec = projects.getBoundingClientRect(),
    aboutSec = about.getBoundingClientRect(),
    contactSec = contact.getBoundingClientRect(),
    scrollPos = window.innerHeight;

  // if the position of the top of the section in question (projecsec, aboutsec, contactsec) is less than or equal to half  or 2/3 the height of the window (i.e., it is in the middle of the window), add show class to make it visible
  // Initially, on a standard 1920x1080p screen, these sections have a greater top value than the window height

  if (
    (introSec.top <= scrollPos / (3 / 2) && introSec.bottom > scrollPos) ||
    (introSec.top < 0 && introSec.bottom >= scrollPos / (3 / 1))
  ) {
    intro.classList.add('show');
  }

  if (
    (projectSec.top <= scrollPos / (3 / 2) && projectSec.bottom > scrollPos) ||
    (projectSec.top < 0 && projectSec.bottom >= scrollPos / (3 / 1))
  ) {
    projects.classList.add('show');
  }

  if (
    (aboutSec.top <= scrollPos / (3 / 2) && aboutSec.bottom > scrollPos) ||
    (aboutSec.top < 0 && aboutSec.bottom >= scrollPos / (3 / 1))
  ) {
    about.classList.add('show');
  }

  if (contactSec.top <= scrollPos / (3 / 2)) {
    contact.classList.add('show');
  }
});

/* ---------------------------------------------------------------- */
// navbar show

menubtn.addEventListener('click', e => {
  menubtn.classList.toggle('rotate');
  navbar.classList.toggle('show');
});

emailInput.addEventListener('keydown', e => {
  if (!emailPattern.test(e.target.value)) {
    if (
      !emailInput.classList.contains('email-error-input') &&
      !emailLabel.classList.contains('email-error-label')
    ) {
      emailInput.classList.add('email-error-input');
      emailLabel.classList.add('email-error-label');
    }
  } else {
    emailInput.classList.remove('email-error-input');
    emailLabel.classList.remove('email-error-label');
  }
});

form.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(form);

    // Submit form request via fetch
    await fetch(form.getAttribute('action'), {
      method: 'POST',
      headers: {
        Accept: 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams(formData).toString(),
    });

    sentH3.classList.toggle('hidden');
    sentH3.classList.toggle('shown');

    form.reset();
    setTimeout(() => {
      sentH3.classList.toggle('hidden');
      sentH3.classList.toggle('shown');
    }, 5000);
  } catch (error) {
    console.error(error);
  }
});
