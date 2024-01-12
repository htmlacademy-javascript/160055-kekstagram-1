const ID_ITEMS_COUNT = 25;

const AVATAR_COMMENT_ID = [
  1,
  2,
  3,
  4,
  5,
  6
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Саша',
  'Паша',
  'Дмитрий',
  'Сергей',
  'Алина',
  'Светлана',
  'Надежда',
  'Ольга',
  'Харима'
];

const DESCRIPTIONS = [
  'Восход солнца в горах - невероятное зрелище, которое заставляет сердце биться быстрее.',
  'Моя собака на прогулке - истинный образец верности и беззаветной любви.',
  'Путешествие по Европе: волшебные улочки Праги захватывают дух своей красотой и атмосферой.',
  'Семейный ужин в ресторане с видом на закат - момент счастья и спокойствия.',
  'Мой новый тату: символ моей силы и решимости, который всегда будет напоминать мне о ценности жизни.',
  'Спортивный тренировочный процесс - борьба с собой и постоянное стремление к лучшему.',
  'Романтический ужин на пляже под звездами - мгновение, когда время останавливается.',
  'Мои дети на празднике в садике - радость и бесконечная энергия, которые наполняют мою жизнь смыслом.',
  'Фотография города из окна самолета - новые горизонты и возможности, которые ждут меня впереди.',
  'Мой новый автомобиль - символ достижения моих целей и трудолюбия, который стал реальностью благодаря усердной работе.'
];
// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
/*{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}*/

// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const randomPostId = createRandomIdFromRangeGenerator (1, 25);
const randomCommentId = createRandomIdFromRangeGenerator (1, 250);
const randomPictureId = createRandomIdFromRangeGenerator (1, 25);
const messageToComment = () => ({
  message: getRandomArrayElement(MESSAGES)
});

const createItemComment = () => ({
  id: randomCommentId(),
  avatar: `img/avatar-${getRandomArrayElement(AVATAR_COMMENT_ID)}.svg`,
  message: Array.from({length: getRandomInteger(1, 2)}, messageToComment),
  name: getRandomArrayElement(NAMES),
});

const createPostItems = () => ({
  id: randomPostId(),
  url: `photos/${randomPictureId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(5, 15)}, createItemComment),
});

const postItems = Array.from({length: ID_ITEMS_COUNT}, createPostItems);

console.log(postItems);
