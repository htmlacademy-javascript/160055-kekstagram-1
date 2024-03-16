import {isEscapeKey} from './popup.js';
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successContainer = successTemplate.cloneNode(true);
const errorContainer = errorTemplate.cloneNode(true);

const closeSuccessContainer = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('mouseup', closeSuccessClick);
  document.body.removeChild(successContainer);
};

function closeSuccessClick(e) {
  const container = document.querySelector('.success__inner');
  if (!container.contains(e.target)) {
    closeSuccessContainer();
  }
}

const showSuccess = () => {
  document.body.append(successContainer);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessContainer);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('mouseup', closeSuccessClick);
};

const closeErrorContainer = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('mouseup', closeAlertClick);
  document.body.removeChild(errorContainer);
};

function closeAlertClick(e) {
  const container = document.querySelector('.success__inner');
  if (!container.contains(e.target)) {
    closeErrorContainer();
  }
}

const showAlert = () => {
  document.body.append(errorContainer);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorContainer);
  document.addEventListener('mouseup', closeAlertClick);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && successContainer !== null) {
    evt.preventDefault();
    closeSuccessContainer();
  } else if (isEscapeKey(evt) && errorContainer !== null) {
    evt.preventDefault();
    closeErrorContainer();
  }
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator, showSuccess, showAlert};
