const pictureFilterModal = document.querySelector('.img-upload__overlay');
const pictureUploadForm = document.querySelector('.img-upload__wrapper');

const registerPristineValidator = () => {
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
};


// const scaleElement = document.querySelector('.img-upload__scale');
// const valueElement = document.querySelector('.scale__control--value');

// valueElement.value = 100;

// noUiSlider.create(scaleElement, {
//   range: {
//     min: 25,
//     max: 100,
//   },
//   start: 100,
//   step: 25,
//   format: {
//     to: function (value) {
//       return value.toFixed(0);
//     },
//     from: function (value) {
//       return parseFloat(value);
//     },
//   },
// });

// scaleElement.noUiSlider.on('update', () => {
//   valueElement.value = scaleElement.noUiSlider.get();
// });

export {registerPristineValidator};
