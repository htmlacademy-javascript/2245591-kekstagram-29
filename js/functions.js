const checkWorkingTime = (dayBeginning, dayEnding, meetingTime, meetingDuration) => {
  dayBeginning = dayBeginning.split(':');
  dayBeginning = +dayBeginning[0] * 60 + +dayBeginning[1];
  dayEnding = dayEnding.split(':');
  dayEnding = +dayEnding[0] * 60 + +dayEnding[1];
  meetingTime = meetingTime.split(':');
  meetingTime = +meetingTime[0] * 60 + +meetingTime[1];
  return (meetingTime >= dayBeginning && dayEnding >= meetingTime + meetingDuration);
};

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/

checkWorkingTime('08:00', '17:30', '14:00', 90); // true
checkWorkingTime('8:0', '10:0', '8:0', 120); // true
checkWorkingTime('08:00', '14:30', '14:00', 90); // false
checkWorkingTime('14:00', '17:30', '08:0', 90); // false
checkWorkingTime('8:00', '17:30', '08:00', 900); // false

// Функция для проверки длины строки.
// Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

const checkStringLength = (string, length) => string.length <= length;

// Тесты функции для проверки длины строки.

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

const checkStringPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

// Тесты функции для проверки, является ли строка палиндромом.

checkStringPalindrome('топот');
checkStringPalindrome('ДовОд');
checkStringPalindrome('Кекс');


// Функция для получения числа из строки. Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const getNumberFromString = (string) => {
  string = string.toString().replace(/\D/g, '');
  return(parseInt(string, 10));
};

// Тесты функции для числа из строки.

getNumberFromString('2023 год'); // 2023
getNumberFromString('ECMAScript 2022'); // 2022
getNumberFromString('1 кефир, 0.5 батона'); // 105
getNumberFromString('агент 007'); // 7
getNumberFromString('а я томат'); // NaN
getNumberFromString(2023); // 2023
getNumberFromString(-1); // 1
getNumberFromString(1.5); // 15
