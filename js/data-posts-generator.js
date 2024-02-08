import {getRandomArrayElement, getRandomInteger, createRandomIdFromRangeGenerator} from './utils.js';
import {getDataForPosts} from './data.js';

const dataPosts = getDataForPosts();
const randomPostId = createRandomIdFromRangeGenerator (1, dataPosts.ITEMS_COUNT);
const randomCommentId = createRandomIdFromRangeGenerator (1, 1000);
const randomPictureId = createRandomIdFromRangeGenerator (1, dataPosts.ITEMS_COUNT);

const createItemComment = () => ({
  id: randomCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(dataPosts.MESSAGES),
  name: getRandomArrayElement(dataPosts.NAMES),
});

const createPostItems = () => ({
  id: randomPostId(),
  url: `photos/${randomPictureId()}.jpg`,
  description: getRandomArrayElement(dataPosts.DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(5, 15)}, createItemComment),
});

const postItems = () => Array.from({length: dataPosts.ITEMS_COUNT}, createPostItems);

export {postItems};
