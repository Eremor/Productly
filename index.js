import { strategies } from './assets/scripts/strategies-data.js';
import { Strategy } from './assets/scripts/strategy.js';

const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navigation');
const strategiesContainer = document.querySelector('.strategies__grid');

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
});

strategiesContainer.innerHTML = '';
strategies.map((data) => {
  const elem = new Strategy(data);
  elem.create(strategiesContainer);
})
