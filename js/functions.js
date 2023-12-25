const isPallindrome = (wordCheck) => {
  const wordOriginal = wordCheck.replaceAll(' ', '').toLowerCase();
  const wordOpposite = wordOriginal.split('').reverse().join('');
  return wordOriginal === wordOpposite;
};
const stringToNumber = (stringCheck) => {
  const clearString = stringCheck.toString().replace(/[^0-9]/g, '');
  return parseInt(clearString, 10);
};
const insertString = (startString, stringLength, addString) => {
  const number = stringLength - startString.length;
  if (number <= 0) {
    return startString;
  } else {
    const str1 = addString.slice(0, number % addString.length);
    const str2 = addString.repeat(number / addString.length);
    return str1 + str2 + startString;
  }
};
const validationString = (stringToValid, checkStringLength) => stringToValid.length <= checkStringLength;

isPallindrome('топот');
isPallindrome('Атлас');
isPallindrome('зАкАз');
isPallindrome('Лёша на полке клопа нашёл ');

stringToNumber('2023 год');
stringToNumber('ECMAScript 2022');
stringToNumber('1 кефир, 0.5 батона');
stringToNumber('агент 007');
stringToNumber('а я томат');
stringToNumber(2023);
stringToNumber(-1);
stringToNumber(1.5);

insertString('1', 2, '0');
insertString('1', 4, '0');
insertString('q', 4, 'werty');
insertString('q', 4, 'we');
insertString('qwerty', 4, '0');

validationString('проверяемая строка', 20);
validationString('проверяемая строка', 18);
validationString('проверяемая строка', 10);
