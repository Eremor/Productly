export class Modal {
  node = document.createElement('div');

  constructor(data) {
    this.data = data;
  }

  create = () => {
    const { img, date, title, desc, tags } = this.data;

    this.node.classList.add('modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal__container');

    const closeButton = document.createElement('button');
    closeButton.classList.add('modal__button', 'btn', 'btn--clear');

    const imageEl = document.createElement('img');
    imageEl.src = img.src;
    imageEl.alt = img.alt;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('modal__image');
    imageContainer.append(imageEl);

    const dateEl = document.createElement('span');
    dateEl.classList.add('modal__date');
    dateEl.textContent = date;

    const titleEl = document.createElement('h2');
    titleEl.classList.add('modal__title');
    titleEl.textContent = title;

    const textEl = document.createElement('p');
    textEl.classList.add('modal__text');
    textEl.textContent = desc;

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('modal__tags');

    tags.forEach(itemText => {
      const elem = document.createElement('span');
      elem.classList.add('tag', 'tag--colored');
      elem.textContent = itemText;
      
      tagsContainer.append(elem)
    });

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('modal__content');
    contentContainer.append(dateEl, titleEl, textEl, tagsContainer);

    modalContainer.append(closeButton, imageContainer, contentContainer);
    this.node.append(modalContainer);
    document.body.append(this.node);

    document.body.classList.add('no-scroll');

    closeButton.addEventListener('click', this.destroy);
    this.node.addEventListener('click', this.destroy);
  }

  destroy = (e) => {
    const { target } = e;
    
    if (
      target.classList.contains('modal')
      || target.classList.contains('modal__button')
    ) {
      this.node.remove();
      document.body.classList.remove('no-scroll');
    }
  }
}