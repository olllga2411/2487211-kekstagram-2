const DESCRIPTIONS = [
  'мое хобби',
  'делай как я',
  'а тебе слабо?',
  'crazy',
  'хороший денек',
  'спокойнойной ночи',
  'ла-ла-ла-ла',
  'каникулы',
  'моя любовь',
];

const NAME_LIST = [
  'Андрей',
  'Ольга',
  'Сергей',
  'Яков',
  'Матвей',
  'Елена',
  'Светлана',
  'Марина',
  'Олег',
];

const USER_MESSAGE_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateLike = getRandomInteger(15, 200);
const generateUrlI = createRandomIdFromRangeGenerator(1, 25);
const commentsId = createRandomIdFromRangeGenerator (1, 100000);
const avatarNumber = getRandomInteger(1, 6);
const quantityMessege = getRandomInteger(1, 2);
const quantityComments = getRandomInteger(0, 30);
const quantityFotos = 25;

function totalMessage (quantityMessege) {
  const textMessege = new Set([USER_MESSAGE_LIST[getRandomInteger(0, USER_MESSAGE_LIST.length - 1)]]);
  if (quantityMessege === 2) {
    while (textMessege.size < 2) {
      textMessege.add(USER_MESSAGE_LIST[getRandomInteger(0, USER_MESSAGE_LIST.length - 1)]);
    }
  }
  return textMessege;
}

const createComments = () => ({
  id: commentsId(),
  avatar: `img/avatar-${ avatarNumber }.svg`,
  message: totalMessage (quantityMessege),
  name: NAME_LIST[getRandomInteger(0, NAME_LIST.length - 1)],
});

const similarComments = Array.from ({length: quantityComments} , createComments);

const createFotos = () => ({
  id : generatePhotoId(),
  url : `photos/${ generateUrlI() }.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: generateLike,
  comments: similarComments
});

const createListFotos = () => Array.from ({length: quantityFotos} , createFotos);

console.log (createListFotos());

