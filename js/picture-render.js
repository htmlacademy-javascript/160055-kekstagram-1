import {openPictureModal} from './popup.js';
import {createRandomIdFromRangeGenerator} from './utils.js';

// const NUMBER_OF_PICTURES = 10;
const MAX_NUMBER_PICTURES = 25;

const picturesRoot = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgSortFilters = document.querySelector('.img-filters');
const buttonDiscussed = document.getElementById('filter-discussed');
const buttonRandom = document.getElementById('filter-random');
const buttonDefault = document.getElementById('filter-default');

const setRandomIdPicture = (pictures) => {
  const randomId = createRandomIdFromRangeGenerator(0, MAX_NUMBER_PICTURES);
  pictures.id = randomId();
};

const getCommentsValue = (picture) => {
  const commentsValue = picture.comments.length;
  return commentsValue;
};

const compareComments = (commentsValueA, commentsValueB) => {
  const rankA = getCommentsValue(commentsValueA);
  const rankB = getCommentsValue(commentsValueB);
  return rankB - rankA;
};

const createPicture = ({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
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

const addFiltersButtons = () => {
  imgSortFilters.classList.remove('img-filters--inactive');
  imgSortFilters.classList.remove('visually-hidden');
};

buttonDiscussed.addEventListener('click', () => {
  buttonDiscussed.classList.add('img-filters__button--active');
  buttonDefault.classList.remove('img-filters__button--active');
  buttonRandom.classList.remove('img-filters__button--active');
});

buttonDefault.addEventListener('click', () => {
  buttonDefault.classList.add('img-filters__button--active');
  buttonDiscussed.classList.remove('img-filters__button--active');
  buttonRandom.classList.remove('img-filters__button--active');
});

buttonRandom.addEventListener('click', () => {
  buttonRandom.classList.add('img-filters__button--active');
  buttonDefault.classList.remove('img-filters__button--active');
  buttonDiscussed.classList.remove('img-filters__button--active');
});

export {addPictures, addFiltersButtons};
