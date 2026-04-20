// Функция для проверки длины строки. Она принимает строку, которую нужно проверить на максимальную длину, и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.

const comparisonLengthString = function (string, maxLenth) {
  const factLength = string.length;
  if (factLength <= maxLenth) {
    return true;
  } else {
    return false;
  }
};

comparisonLengthString ('кольцо', 20);
comparisonLengthString ('привет из Питера', 25);
comparisonLengthString ('кукушка', 2);

// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

const palindrome = function (string) {
  let processingString = string.replaceAll(' ','');
  processingString = processingString.toLowerCase();
  const lengthString = processingString.length;
  let reverseString = '';
  for (let i = lengthString - 1; i > -1; i = i - 1) {
    reverseString = reverseString + processingString[i];
  }
  if (processingString === reverseString) {
    console.log (`${string } - является палидромом`);
  } else {
    console.log (`${string } - не является палидромом`);
  }
};

palindrome('я люблю');
palindrome('ДовОд');
palindrome('Лёша на полке клопа нашёл');

