const picturesRoot = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const fragment = document.createDocumentFragment();

const addPictures = (data) => {
  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElement);
  });
  picturesRoot.appendChild(fragment);
};

export {addPictures};
