export class Strategy {
  node = document.createElement('article');

  constructor(data) {
    this.data = data;
  }

  create = (parentNode) => {
    const { img, title, tags, className } = this.data;

    className.forEach((item) => this.node.classList.add(item))

    const imageEl = document.createElement('img');
    imageEl.src = img.src;
    imageEl.alt = img.alt;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('strategy__image');
    imageContainer.append(imageEl);

    const titleEl = document.createElement('h3');
    titleEl.classList.add('strategy__title');
    titleEl.textContent = title;

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('strategy__tags');

    tags.forEach(itemText => {
      const elem = document.createElement('span');
      elem.classList.add('tag', 'tag--colored');
      elem.textContent = itemText;
      
      tagsContainer.append(elem)
    });

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('strategy__content');
    contentContainer.append(titleEl, tagsContainer);

    this.node.append(imageContainer, contentContainer);
    parentNode.append(this.node);
  }
}