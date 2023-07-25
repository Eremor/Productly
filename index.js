const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--open');
  navBar.classList.toggle('navigation--open');
  document.body.classList.toggle('no-scroll');
});

navBar.addEventListener('click', (e) => {
  const { target } = e;

  if(
    target.classList.contains('navigation--open')
    || target.parentNode.classList.contains('navigation__item')
  ) {
    burger.classList.remove('burger--open');
    navBar.classList.remove('navigation--open');
    document.body.classList.remove('no-scroll');
  }
})