const bodyClassPopup = document.querySelector('body');
const pictureModal = document.querySelector('.big-picture');
const pictureOpen = document.querySelector('.pictures');
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

const openPictureModal = () => {
  pictureModal.classList.remove('hidden');
  hideCommentCount.classList.add('hidden');
  hideCommentLoader.classList.add('hidden');
  bodyClassPopup.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};
pictureOpen.addEventListener('click', (event) => {
  event.preventDefault();
  openPictureModal();
});

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
