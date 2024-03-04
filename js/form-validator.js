import {isEscapeKey} from './popup.js';
const bodyClassPopup = document.querySelector('body');
const pictureFilterModal = document.querySelector('.img-upload__overlay');
const pictureUploadForm = document.querySelector('.img-upload__wrapper');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const uploadFileButton = document.getElementById('upload-file');
const closeFilterButton = document.getElementById('upload-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureFilterModal();
  }
};

const focusInput = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
};

const blurInput = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('focus', focusInput);
};

const openPictureFilterModal = () => {
  pictureFilterModal.classList.remove('hidden');
  bodyClassPopup.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

uploadFileButton.addEventListener('change', () => {
  openPictureFilterModal();
});

function closePictureFilterModal() {
  pictureFilterModal.classList.add('hidden');
  bodyClassPopup.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeFilterButton.removeEventListener('keydown', closePictureFilterModal);
  hashtagInput.removeEventListener('focus', focusInput);
  hashtagInput.removeEventListener('blur', blurInput);
  descriptionInput.removeEventListener('focus', focusInput);
  descriptionInput.removeEventListener('blur', blurInput);
  uploadFileButton.value = '';
}

closeFilterButton.addEventListener('click', () => {
  closePictureFilterModal();
});

hashtagInput.addEventListener('focus', focusInput);
hashtagInput.addEventListener('blur', blurInput);

descriptionInput.addEventListener('focus', focusInput);
descriptionInput.addEventListener('blur', blurInput);

const pristine = new Pristine(pictureUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form__error'
});

const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const isValidTag = (tag) => hashtag.test(tag);

const validateHashtag = (value) => {
  const arrayValue = value.trim().toLowerCase().split(' ');
  const duplicates = arrayValue.filter((number, index, numbers) => numbers.indexOf(number) !== index);

  return value === '' || arrayValue.length <= 5 && duplicates.length === 0 && arrayValue.every(isValidTag);
};
const validateTextDescription = (value) => value.length <= 140;

pristine.addValidator(pictureFilterModal.querySelector('.text__hashtags'), validateHashtag, 'Хештег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д. Также не должно быть более 5 хештегов.');
pristine.addValidator(pictureFilterModal.querySelector('.text__description'), validateTextDescription, 'Длина до 140 символов');

pictureUploadForm.addEventListener('submit', () => {
  pristine.validate();
});

export {openPictureFilterModal};
