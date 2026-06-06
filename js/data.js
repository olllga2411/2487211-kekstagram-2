import {getRandomInteger} from './util.js';
import {createRandomIdFromRangeGenerator} from './util.js';

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

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateLike = getRandomInteger(15, 200);
const generateUrlI = createRandomIdFromRangeGenerator(1, 25);
const commentsId = createRandomIdFromRangeGenerator (1, 100000);
const avatarNumber = getRandomInteger(1, 6);
const quantityMessege = getRandomInteger(1, 2);
const quantityComments = getRandomInteger(0, 30);
const quantityFotos = 25;

function totalMessage (quantityMessege) {
  const textMessege = new Set([messegeUser[getRandomInteger(0, messegeUser.length - 1)]]);
  if (quantityMessege === 2) {
    while (textMessege.size < 2) {
      textMessege.add(messegeUser[getRandomInteger(0, messegeUser.length - 1)]);
    }
  }
  return textMessege;
}

const createComments = () => ({
  id: commentsId(),
  avatar: `img/avatar-${ avatarNumber }.svg`,
  message: totalMessage (quantityMessege),
  name: nameUser[getRandomInteger(0, nameUser.length - 1)],
});

const similarComments = Array.from ({length: quantityComments} , createComments);

const createFotos = () => ({
  id : generatePhotoId(),
  url : `photos/${ generateUrlI() }.jpg`,
  description: description[getRandomInteger(0, description.length - 1)],
  likes: generateLike,
  comments: similarComments
});

const similarFotos = Array.from ({length: quantityFotos} , createComments);

export {similarFotos};
