// Функция для проверки длины строки.
// Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

function checkStringLength (string, length) {
  return (string.length <= length);
}

// Тесты функции для проверки длины строки.

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

function checkStringPalindrome (string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  newString = newString.replaceAll(' ', '').toUpperCase();
  string = string.toUpperCase();
  return (string === newString);
}

// Тесты функции для проверки, является ли строка палиндромом.

checkStringPalindrome('топот');
checkStringPalindrome('ДовОд');
checkStringPalindrome('Кекс');


// Функция для получения числа из строки. Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

function getNumberFromString (string) {
  string = string.toString();
  let newString = '';

  for (let i = 0; i <= string.length - 1; i++) {
    const newChar = parseInt(string[i], 10);

    if (Number.isNaN(newChar) !== true) {
      newString += newChar;
    }
  }

  return(parseInt(newString, 10));
}

// Тесты функции для числа из строки.

getNumberFromString('2023 год'); // 2023
getNumberFromString('ECMAScript 2022'); // 2022
getNumberFromString('1 кефир, 0.5 батона'); // 105
getNumberFromString('агент 007'); // 7
getNumberFromString('а я томат'); // NaN
getNumberFromString(2023); // 2023
getNumberFromString(-1); // 1
getNumberFromString(1.5); // 15
