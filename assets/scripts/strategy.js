export class Strategy {
  node = document.createElement('article');

  constructor(data) {
    this.img = data.img;
    this.title = data.title;
    this.desc = data.desc;
    this.tags = data.tags;
    this.className = data.class;
  }

  create = (parentNode) => {
    this.className.forEach((item) => this.node.classList.add(item))

    const imageEl = document.createElement('img');
    imageEl.src = this.img.src;
    imageEl.alt = this.img.alt;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('strategy__image');
    imageContainer.append(imageEl);

    const titleEl = document.createElement('h3');
    titleEl.classList.add('strategy__title');
    titleEl.textContent = this.title;

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('strategy__tags');

    this.tags.forEach(itemText => {
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