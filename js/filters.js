import {SETTING_FILTER_CHROME, SETTING_FILTER_SEPIA, SETTING_FILTER_MARVIN, SETTING_FILTER_PHOBOS, SETTING_FILTER_HEAT} from './filter-settings.js';
import {uiSlider} from './form-upload-modal.js';

const registerFilters = (uiSlider) => {
  const wrapper = document.querySelector('.img-upload__overlay');

  const scaleElement = wrapper.querySelector('.img-upload__preview img');
  const valueElement = wrapper.querySelector('.scale__control--value');
  const buttonMinus = wrapper.querySelector('.scale__control--smaller');
  const buttonPlus = wrapper.querySelector('.scale__control--bigger');

  const sliderBlockClass = wrapper.querySelector('.img-upload__effect-level');
  const sliderElement = wrapper.querySelector('.effect-level__slider');
  const sliderEffectLevel = wrapper.querySelector('.effect-level__value');
  const filterChrome = wrapper.querySelector('.effects__preview--chrome');
  const filterSepia = wrapper.querySelector('.effects__preview--sepia');
  const filterMarvin = wrapper.querySelector('.effects__preview--marvin');
  const filterPhobos = wrapper.querySelector('.effects__preview--phobos');
  const filterHeat = wrapper.querySelector('.effects__preview--heat');
  const filterNone = wrapper.querySelector('.effects__preview--none');

  let procentScaleValue = 100;
  let procentHalf = 0;
  buttonPlus.classList.add('disabled');
  valueElement.value = `${procentScaleValue}%`;
  scaleElement.style.transform = 'scale(1)';

  buttonMinus.addEventListener('click', () => {
    procentScaleValue = procentScaleValue - 25;
    procentHalf = procentScaleValue / 100;
    valueElement.value = `${procentScaleValue}%`;
    scaleElement.style.transform = `scale(${procentHalf})`;
    buttonMinus.classList.remove('disabled');
    buttonPlus.classList.remove('disabled');
    if (procentScaleValue === 25) {
      buttonMinus.classList.add('disabled');
    }
  });

  buttonPlus.addEventListener('click', () => {
    procentScaleValue = procentScaleValue + 25;
    procentHalf = procentScaleValue / 100;
    valueElement.value = `${procentScaleValue}%`;
    scaleElement.style.transform = `scale(${procentHalf})`;
    buttonPlus.classList.remove('disabled');
    buttonMinus.classList.remove('disabled');
    if (procentScaleValue === 100) {
      buttonPlus.classList.add('disabled');
    }
  });

  const filterInputHide = () => {
    sliderBlockClass.classList.add('hidden');
  };

  const filterInputAdd = () => {
    sliderBlockClass.classList.remove('hidden');
  };

  // uiSlider.create(sliderElement, {
  //   range: {
  //     min: 0,
  //     max: 100,
  //   },
  //   start: 100,
  //   step: 1,
  //   connect: 'lower',
  // });
  filterInputHide();
  scaleElement.classList.add('effects__preview--none');
  sliderElement.noUiSlider.on('update', () => {
    sliderEffectLevel.value = sliderElement.noUiSlider.get();
    if (scaleElement.className === filterChrome.classList[1]) {

      scaleElement.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;

    } else if (scaleElement.className === filterSepia.classList[1]) {

      scaleElement.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;

    } else if (scaleElement.className === filterMarvin.classList[1]) {

      scaleElement.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;

    } else if (scaleElement.className === filterPhobos.classList[1]) {

      scaleElement.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;

    } else if (scaleElement.className === filterHeat.classList[1]) {

      scaleElement.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;

    }
  });

  filterNone.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--none';
    filterInputHide();
    scaleElement.style.removeProperty('filter');
  });

  filterChrome.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--chrome';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions(SETTING_FILTER_CHROME);
  });

  filterSepia.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--sepia';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions(SETTING_FILTER_SEPIA);
  });

  filterMarvin.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--marvin';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions(SETTING_FILTER_MARVIN);
  });

  filterPhobos.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--phobos';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions(SETTING_FILTER_PHOBOS);
  });

  filterHeat.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--heat';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions(SETTING_FILTER_HEAT);
  });
};

export {registerFilters};
