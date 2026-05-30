const description = [
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


const foto = {
  id : generatePhotoId(),
  url : `photos/${ generateUrlI() }.jpg`,
  description: description[getRandomInteger(0, description.length - 1)],
  likes: generateLike
};

console.log(foto);


const description = [
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

const nameUser = [
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

const messegeUser = [
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
  let previousValues = [];
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
const commentsId = createRandomIdFromRangeGenerator (0, 100000);
const avatarNumber = getRandomInteger(1, 6);
const numberMessege = getRandomInteger(1, 2);
console.log(numberMessege);


function message (numberMessege) {
  if (numberMessege === 1) {
    return messegeUser[getRandomInteger(0, messegeUser.length - 1)];
  } else {
      return messegeUser[getRandomInteger(0, messegeUser.length - 1)] + ' ' + messegeUser[getRandomInteger(0, messegeUser.length - 1)]
    }
}



const comments = {
  id: commentsId(),
  avatar: 'img/avatar-' + avatarNumber + '.svg',
  message: message (numberMessege),
  name: nameUser[getRandomInteger(0, nameUser.length - 1)],
}

console.log(message());

const foto = {
  id : generatePhotoId(),
  url : 'photos/' + generateUrlI() + '.jpg',
  description: description[getRandomInteger(0, description.length - 1)],
  likes: generateLike,

};

console.log(foto);
