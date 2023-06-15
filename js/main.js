/* Структура каждого объекта должна быть следующей:
  id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
  url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  description, строка — описание фотографии. Описание придумайте самостоятельно.
  likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
    {
      id: 135,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артём',
    }
  У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.
  Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
  Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
  Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
*/

const PHOTO_DESCRIPTIONS_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Виктория Харитонова',
  'Вера Казакова',
  'Лев Дьяков',
  'Есения Игнатьева',
  'София Григорьева',
  'Полина Михайлова',
  'Елизавета Миронова',
  'Леонид Зайцев',
  'Арина Петрова',
  'Елизавета Полякова',
];

const DESCRIPTIONS = [
  'Stop looking for happiness in the same place you just lost it.',
  'Good things come to those who book flights.',
  'We go together like peanut butter and jelly.',
  'A lot goes down when we dress up.',
  'Friends become our chosen family!',
  'Tis the season to be freezin’'
];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

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

const generateCommentId = createRandomIdFromRangeGenerator (1, 10000);
const generatePhotoId = createRandomIdFromRangeGenerator (1, 25);
const generateLikesNumber = createRandomIdFromRangeGenerator (15, 200);
const generateCommentsNumber = createRandomIdFromRangeGenerator (1, 30);

const getRandomArrayElement = (elements) => elements[getRandomInteger (0, elements.length - 1)];

const createCommentsArray = () => {
  const avatarId = getRandomInteger(1, 6);

  return {
    id: generateCommentId(),
    avatar:  `img/avatar-${ avatarId }.svg` ,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhotoDescription = () => {
  const photoId = generatePhotoId();
  const commentsNumber = generateCommentsNumber();
  const commentsArray = [Array.from({length: commentsNumber}, createCommentsArray)];

  return {
    id: photoId,
    url: `photos/${ photoId }.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: generateLikesNumber(),
    comments: commentsArray,
  };
};

const photoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

// eslint-disable-next-line no-console
console.log(photoDescriptions);
