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
// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>
const addPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const allPictures = createPicture(picture);
    allPictures.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(picture);
      openPictureModal(picture);
      const bigPictureSrc = document.querySelector('.big-picture__img img');
      const bigPictureLikes = document.querySelector('.likes-count');
      const bigPictureCommentsCount = document.querySelector('.comments-count');
      const bigPictureDescription = document.querySelector('.social__caption');
      const bigPictureCommentsBlock = document.querySelector('.social__comments');
      bigPictureCommentsBlock.innerHTML = '';
      picture.comments.forEach((element) => {
        const commentElement = document.createElement('li');
        const commentElementImage = document.createElement('img');
        const commentElementDescription = document.createElement('p');

        commentElement.className = 'social__comment';
        commentElementImage.className = 'social__picture';
        commentElementImage.src = element.avatar;
        commentElementImage.alt = element.name;
        commentElementImage.width = 25;
        commentElementImage.heigth = 25;
        commentElementDescription.className = 'social__text"';
        commentElementDescription.innerHTML = element.message;
        commentElement.appendChild(commentElementImage);
        commentElement.appendChild(commentElementDescription);
        bigPictureCommentsBlock.appendChild(commentElement);
      });

      bigPictureSrc.src = picture.url;
      bigPictureLikes.textContent = picture.likes;
      bigPictureCommentsCount.textContent = picture.comments.length;
      bigPictureDescription.textContent = picture.description;

    });
    fragment.appendChild(allPictures);
  });
  picturesRoot.appendChild(fragment);
};

export {addPictures};
