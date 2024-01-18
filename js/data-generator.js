import {getRandomArrayElement, getRandomInteger} from './util-random.js';
import {randomPostId, randomCommentId, randomPictureId} from './util-sort.js';
import {ITEMS_COUNT, MESSAGES, NAMES, DESCRIPTIONS} from './data.js';

const createItemComment = () => ({
  id: randomCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPostItems = () => ({
  id: randomPostId(),
  url: `photos/${randomPictureId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(5, 15)}, createItemComment),
});

const postItems = Array.from({length: ITEMS_COUNT}, createPostItems);

console.log(postItems); // eslint-disable-line
export {postItems};
