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

function openPictureModal () {
  pictureModal.classList.remove('hidden');
  hideCommentCount.classList.add('hidden');
  hideCommentLoader.classList.add('hidden');
  bodyClassPopup.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}
pictureOpen.addEventListener('click', (event) => {
  event.preventDefault();
  // const bigPictureImg = document.querySelector('.big-picture__img img');
  // const pictureSrc = document.querySelector('.picture__img').src;
  // bigPictureImg.src = pictureSrc;
  openPictureModal();
});

function closePictureModal () {
  pictureModal.classList.add('hidden');
  bodyClassPopup.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}
closeModalClass.addEventListener('click', () => {
  closePictureModal();
});

closeModalClass.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closePictureModal();
  }
});
export {openPictureModal, closePictureModal};

// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>

// Описание фотографии description вставьте строкой в блок .social__caption.
