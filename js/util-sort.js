import {getRandomInteger} from './util-random.js';
import {ITEMS_COUNT} from './data.js';

const randomPostId = createRandomIdFromRangeGenerator (1, ITEMS_COUNT);
const randomCommentId = createRandomIdFromRangeGenerator (1, 1000);
const randomPictureId = createRandomIdFromRangeGenerator (1, ITEMS_COUNT);

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
export {randomPostId, randomCommentId, randomPictureId};
