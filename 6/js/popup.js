const bodyClassPopup = document.querySelector('body');
const pictureModal = document.querySelector('.big-picture');
const closeModalClass = pictureModal.querySelector('.big-picture__cancel');
const hideCommentCount = document.querySelector('.social__comment-count');
const hideCommentLoader = document.querySelector('.comments-loader');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
};

const openPictureModal = (picture) => {
  pictureModal.classList.remove('hidden');
  hideCommentCount.classList.add('hidden');
  hideCommentLoader.classList.add('hidden');
  bodyClassPopup.classList.add('modal-open');
  const bigPictureSrc = document.querySelector('.big-picture__img img');
  const bigPictureLikes = document.querySelector('.likes-count');
  const bigPictureCommentsCount = document.querySelector('.comments-count');
  const bigPictureDescription = document.querySelector('.social__caption');
  const bigPictureCommentsBlock = document.querySelector('.social__comments');

  bigPictureSrc.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureCommentsCount.textContent = picture.comments.length;
  bigPictureDescription.textContent = picture.description;
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

  document.addEventListener('keydown', onDocumentKeydown);
};

const closePictureModal = () => {
  pictureModal.classList.add('hidden');
  bodyClassPopup.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};
closeModalClass.addEventListener('click', () => {
  closePictureModal();
});

closeModalClass.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closePictureModal();
  }
});
export {openPictureModal, closePictureModal};
