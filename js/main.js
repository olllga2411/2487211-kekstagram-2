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
};

console.log(foto);

