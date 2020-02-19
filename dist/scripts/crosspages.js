// get constant update for year
document.getElementById('year').innerHTML = new Date().getFullYear();

//dropdown toggle
const menubtn = document.getElementById('menubtn'),
  navbar = document.getElementById('nav'),
  navLi = document.getElementById('navUL');

// nav dropdown click
menubtn.addEventListener('click', dropdown);

// activate dropdown menu
function dropdown() {
  navbar.classList.toggle('responsive');
}

navLi.addEventListener('mouseover', e => {
  e.target.classList.add('navLinkFadeIn');
});
navLi.addEventListener('mouseout', e => {
  e.target.classList.remove('navLinkFadeIn');
  e.target.classList.add('navLinkFadeOut');

  setTimeout(() => {
    e.target.classList.remove('navLinkFadeOut');
  }, 401);
});
