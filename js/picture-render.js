import {openPictureModal} from './popup.js';

const picturesRoot = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = ({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
};

const clearPictureContainer = () => {
  picturesRoot.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

const addPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const allPictures = createPicture(picture);
    allPictures.addEventListener('click', (event) => {
      event.preventDefault();
      openPictureModal(picture);
    });
    fragment.appendChild(allPictures);
  });
  picturesRoot.appendChild(fragment);
};

export {addPictures, clearPictureContainer};
