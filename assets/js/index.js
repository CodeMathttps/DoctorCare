function onScroll() {
  if (scrollY > 1) navigation.classList.add('scroll')
  else navigation.classList.remove('scroll')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(`#home,
          #home img,
          #home .stats,
          #services header,
          #services .card,
          #about header,
          #about p,
          #about img`)
