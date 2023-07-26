import { strategies } from './assets/scripts/strategies-data.js';
import { Strategy } from './assets/scripts/strategy.js';

const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navigation');
const strategiesContainer = document.querySelector('.strategies__grid');
const tagsButtonContainer = document.querySelector('.strategies__tags');
const tagButtons = tagsButtonContainer.querySelectorAll('.tag');

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

const filterStrategies = (filter) => {
  let cards = [];

  if (filter === 'All') {
    cards = [...strategies];
  } else {
    strategies.filter((strategy) => {
      const { tags } = strategy;
      tags.forEach((tag) => {
        if (tag === filter) {
          cards.push(strategy);
        }
      });
    });
  }

  return cards;
}

const toggleWideCard = () => {
  const strategiesElements = strategiesContainer.querySelectorAll('.strategy');

  if (strategiesElements.length < 5) {
    strategiesElements.forEach((elem) => {
      elem.classList.remove('strategy--wide');
    })
  }
}

const generateStrategies = (filter) => {
  strategiesContainer.innerHTML = '';

  const dataElements = filterStrategies(filter);

  dataElements.map((data) => {
    const elem = new Strategy(data);
    elem.create(strategiesContainer);
  });

  toggleWideCard();
}

const handleStrategyTags = (e) => {
  const { target } = e;

  if (target.classList.contains('tag') && !target.classList.contains('tag--selected')) {
    tagButtons.forEach((btn) => {
      btn.classList.remove('tag--selected');
      btn.classList.add('tag--bordered');
    });
    target.classList.remove('tag--bordered');
    target.classList.add('tag--selected');
    generateStrategies(target.textContent);
  }
};

tagsButtonContainer.addEventListener('click', handleStrategyTags);