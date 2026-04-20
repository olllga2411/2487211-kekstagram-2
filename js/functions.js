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

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN ПЕРВЫЙ ВАРИАНТ

const findNumber1 = function (string) {
  string = string.toString();
  let number = '';
  for (let i = 0; i <= string.length; i++) {
    if (parseInt(string[i], 10) === parseInt(string[i], 10)) {
      number = number + parseInt(string[i], 10);
    }
  }
  if (number === '') {
    return NaN;
  }
  console.log(number);
};

findNumber1('2023 год');
findNumber1('ECMAScript 2022');
findNumber1('1 кефир, 0.5 батона');
findNumber1('агент 007');
findNumber1('а я томат');
findNumber1(2023);
findNumber1(-1);
findNumber1(1.5);

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN ВТОРОЙ ВАРИАНТ

const findNumber2 = function (string) {
  string = string.toString();
  let number = '';
  for (let i = 0; i <= string.length; i++) {
    const getNumber = parseInt(string[i], 10);
    if (Number.isNaN(getNumber)){
    } else {
      number = number + getNumber;
    }
  }
  if (number === '') {
    return NaN;
  }
  console.log(number);
};


findNumber2('2023 год');
findNumber2('ECMAScript 2022');
findNumber2('1 кефир, 0.5 батона');
findNumber2('агент 007');
findNumber2('а я томат');
findNumber(2023);
findNumber2(-1);
findNumber2(1.5);
