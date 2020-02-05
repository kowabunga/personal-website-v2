// get constant update for year
document.getElementById('year').innerHTML = new Date().getFullYear();

//dropdown toggle
menubtn = document.getElementById('menubtn');
menubtn.addEventListener('click', dropdown);

// nav bar
const navbar = document.getElementById('nav');

// activate dropdown menu
function dropdown() {
  navbar.classList.toggle('responsive');
}
