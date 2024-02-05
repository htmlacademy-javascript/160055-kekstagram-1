import {postItems} from './data-posts-generator.js';

const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content;

const similarListFragment = document.createDocumentFragment();

const similarPictures = postItems();

similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListElement.appendChild(pictureElement);
});

similarListElement.appendChild(similarListFragment);

export {similarListFragment};
