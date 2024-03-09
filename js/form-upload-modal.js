import {isEscapeKey} from './popup.js';
import {registerPristineValidator} from './form-validator.js';
import {registerFilters} from './filters.js';

const bodyClassPopup = document.querySelector('body');
const pictureFilterModal = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const uploadFileButton = document.getElementById('upload-file');
const closeFilterButton = document.getElementById('upload-cancel');
const sliderElement = document.querySelector('.effect-level__slider');

let uiSlider;

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
  hashtagInput.addEventListener('focus', focusInput);
  hashtagInput.addEventListener('blur', blurInput);

  descriptionInput.addEventListener('focus', focusInput);
  descriptionInput.addEventListener('blur', blurInput);

  uiSlider = noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
  registerPristineValidator();
  registerFilters(uiSlider);
  document.addEventListener('keydown', onDocumentKeydown);
};

const registerUploadFileButton = () => {
  uploadFileButton.addEventListener('change', () => {
    openPictureFilterModal();
  });
};

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
  sliderElement.noUiSlider.destroy();
}

closeFilterButton.addEventListener('click', () => {
  closePictureFilterModal();
});

export {registerUploadFileButton, uiSlider};
