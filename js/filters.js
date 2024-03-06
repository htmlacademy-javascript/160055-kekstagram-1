const registerFilters = () => {
  const scaleElement = document.querySelector('.img-upload__preview img');

  const valueElement = document.querySelector('.scale__control--value');
  const buttonMinus = document.querySelector('.scale__control--smaller');
  const buttonPlus = document.querySelector('.scale__control--bigger');

  // const effectButtons = document.querySelectorAll('.effects__item');
  const sliderElement = document.querySelector('.effect-level__slider');
  const sliderEffectLevel = document.querySelector('.effect-level__value');
  const filterChrome = document.querySelector('.effects__preview--chrome');
  const filterSepia = document.querySelector('.effects__preview--sepia');
  const filterMarvin = document.querySelector('.effects__preview--marvin');
  const filterPhobos = document.querySelector('.effects__preview--phobos');
  const filterHeat = document.querySelector('.effects__preview--heat');
  const filterNone = document.querySelector('.effects__preview--none');

  const filterInputHide = () => {
    sliderElement.classList.add('hidden');
  };

  const filterInputAdd = () => {
    sliderElement.classList.remove('hidden');
  };

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
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
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });
  });

  filterSepia.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--sepia';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  });

  filterMarvin.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--marvin';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  });

  filterPhobos.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--phobos';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  });

  filterHeat.addEventListener('click', () => {
    scaleElement.className = 'effects__preview--heat';
    filterInputAdd();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      // format: format,
    });
  });
  // const format = {
  //   to: function (value) {
  //     return value.toFixed(0);
  //   },
  //   from: function (value) {
  //     return parseFloat(value);
  //   },
  // };
  // effectButtons.forEach((button) => {
  //   button.addEventListener('click', () => {
  //     const effectClass = button.querySelector('label span').classList[1];
  //     scaleElement.removeAttribute('class');
  //     scaleElement.className = effectClass;
  //     if (effectClass === 'effects__preview--chrome') {
  //       filterInputAdd();
  //       sliderElement.noUiSlider.updateOptions({
  //         range: {
  //           min: 0,
  //           max: 1,
  //         },
  //         start: 1,
  //         step: 0.1,
  //         connect: 'lower',
  //         // format: format,
  //       });

  //       sliderElement.noUiSlider.on('update', () => {
  //         sliderEffectLevel.value = sliderElement.noUiSlider.get();
  //         scaleElement.style.filter = `grayscale('${sliderElement.noUiSlider.get()}')`;
  //         console.log(`grayscale('${sliderElement.noUiSlider.get()}')`);
  //       });

  //     } else if (effectClass === 'effects__preview--sepia') {
  //       filterInputAdd();
  //       sliderElement.noUiSlider.updateOptions({
  //         range: {
  //           min: 0,
  //           max: 1,
  //         },
  //         start: 1,
  //         step: 0.1,
  //         // format: format,
  //       });
  //       sliderElement.noUiSlider.on('update', () => {
  //         sliderEffectLevel.value = sliderElement.noUiSlider.get();
  //         scaleElement.style.filter = `sepia('${sliderElement.noUiSlider.get()}')`;
  //         console.log(`sepia('${sliderElement.noUiSlider.get()}')`);
  //       });
  //     } else if (effectClass === 'effects__preview--marvin') {
  //       filterInputAdd();
  //       sliderElement.noUiSlider.updateOptions({
  //         range: {
  //           min: 0,
  //           max: 100,
  //         },
  //         start: 100,
  //         step: 1,
  //         // format: format,
  //       });
  //       sliderElement.noUiSlider.on('update', () => {
  //         sliderEffectLevel.value = sliderElement.noUiSlider.get();
  //         scaleElement.style.filter = `invert('${sliderElement.noUiSlider.get()}'%)`;
  //         console.log(`invert('${sliderElement.noUiSlider.get()}')`);
  //       });
  //     } else if (effectClass === 'effects__preview--phobos') {
  //       filterInputAdd();
  //       sliderElement.noUiSlider.updateOptions({
  //         range: {
  //           min: 0,
  //           max: 3,
  //         },
  //         start: 3,
  //         step: 0.1,
  //         // format: format,
  //       });
  //       sliderElement.noUiSlider.on('update', () => {
  //         sliderEffectLevel.value = sliderElement.noUiSlider.get();
  //         scaleElement.style.filter = `blur('${sliderElement.noUiSlider.get()}'px)`;
  //         console.log(`blur('${sliderElement.noUiSlider.get()}')`);
  //       });
  //     } else if (effectClass === 'effects__preview--heat') {
  //       filterInputAdd();
  //       sliderElement.noUiSlider.updateOptions({
  //         range: {
  //           min: 1,
  //           max: 3,
  //         },
  //         start: 3,
  //         step: 0.1,
  //         // format: format,
  //       });
  //       sliderElement.noUiSlider.on('update', () => {
  //         sliderEffectLevel.value = sliderElement.noUiSlider.get();
  //         scaleElement.style.filter = `brightness('${sliderElement.noUiSlider.get()}')`;
  //         console.log(`brighthess('${sliderElement.noUiSlider.get()}')`);
  //       });
  //     } else if (effectClass === 'effects__preview--none' || effectClass === '') {
  //       // scaleElement.style.filter = 'none';
  //       filterInputHide();
  //     }
  //   });
  // });

  let procentScaleValue = 100;
  buttonPlus.classList.add('disabled');
  valueElement.value = `${procentScaleValue}%`;
  scaleElement.style.transform = 'scale(1)';
  buttonMinus.addEventListener('click', () => {
    if (procentScaleValue === 25) {
      buttonMinus.classList.add('disabled');
      scaleElement.style.transform = 'scale(0.25)';
    } else {
      procentScaleValue = procentScaleValue - 25;
      valueElement.value = `${procentScaleValue}%`;
      scaleElement.style.transform = `scale(0.${procentScaleValue})`;
      buttonMinus.classList.remove('disabled');
      buttonPlus.classList.remove('disabled');
    }
  });

  buttonPlus.addEventListener('click', () => {
    if (procentScaleValue === 100) {
      buttonPlus.classList.add('disabled');
      scaleElement.style.transform = 'scale(1)';
    } else {
      procentScaleValue = procentScaleValue + 25;
      valueElement.value = `${procentScaleValue}%`;
      if (procentScaleValue === 100) {
        buttonPlus.classList.add('disabled');
        scaleElement.style.transform = 'scale(1)';
      } else {
        scaleElement.style.transform = `scale(0.${procentScaleValue})`;
      }
      buttonPlus.classList.remove('disabled');
      buttonMinus.classList.remove('disabled');
    }
  });
};

export {registerFilters};
