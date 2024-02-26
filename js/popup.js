const bodyClassPopup = document.querySelector('body');
const pictureModal = document.querySelector('.big-picture');
const closeModalClass = pictureModal.querySelector('.big-picture__cancel');
const hideCommentCount = document.querySelector('.social__comment-count');
const hideCommentLoader = document.querySelector('.comments-loader');
const bigPictureCommentsBlock = document.querySelector('.social__comments');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
};

closeModalClass.addEventListener('click', () => {
  closePictureModal();
});

function closePictureModal() {
  pictureModal.classList.add('hidden');
  bodyClassPopup.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeModalClass.removeEventListener('keydown', closePictureModal);
}

const renderComment = (comment) => {
  const commentElement = document.createElement('li');
  const commentElementImage = document.createElement('img');
  const commentElementDescription = document.createElement('p');

  commentElement.className = 'social__comment';
  commentElementImage.className = 'social__picture';
  commentElementImage.src = comment.avatar;
  commentElementImage.alt = comment.name;
  commentElementImage.width = 25;
  commentElementImage.heigth = 25;
  commentElementDescription.className = 'social__text"';
  commentElementDescription.innerHTML = comment.message;
  commentElement.appendChild(commentElementImage);
  commentElement.appendChild(commentElementDescription);
  bigPictureCommentsBlock.appendChild(commentElement);
};

const renderCommentsBlock = (comments) => {
  bigPictureCommentsBlock.innerHTML = '';
  comments.forEach((comment) => renderComment(comment));
};

const renderPopup = (picture) => {
  const bigPictureSrc = document.querySelector('.big-picture__img img');
  const bigPictureLikes = document.querySelector('.likes-count');
  const bigPictureCommentsCount = document.querySelector('.comments-count');
  const bigPictureDescription = document.querySelector('.social__caption');

  bigPictureSrc.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureCommentsCount.textContent = picture.comments.length;
  bigPictureDescription.textContent = picture.description;
};

const openPictureModal = (picture) => {
  pictureModal.classList.remove('hidden');
  hideCommentCount.classList.add('hidden');
  hideCommentLoader.classList.add('hidden');
  bodyClassPopup.classList.add('modal-open');

  renderPopup(picture);
  renderCommentsBlock(picture.comments);

  document.addEventListener('keydown', onDocumentKeydown);
};

export {openPictureModal};
