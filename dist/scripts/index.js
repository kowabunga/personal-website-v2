const gitIcon = document.getElementById('giticon'),
  linkIcon = document.getElementById('linkedicon');

//   icon hovers
gitIcon.addEventListener('mouseover', e => {
  e.target.classList.add('buttonAnimationIn');
});
gitIcon.addEventListener('mouseout', e => {
  e.target.classList.remove('buttonAnimationIn');
  e.target.classList.add('buttonAnimationOut');

  setTimeout(() => {
    e.target.classList.remove('buttonAnimationOut');
  }, 401);
});

linkIcon.addEventListener('mouseover', e => {
  e.target.classList.add('buttonAnimationIn');
});

linkIcon.addEventListener('mouseout', e => {
  e.target.classList.remove('buttonAnimationIn');
  e.target.classList.add('buttonAnimationOut');

  setTimeout(() => {
    e.target.classList.remove('buttonAnimationOut');
  }, 401);
});
