const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger (0, elements.length - 1)];
const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export { getRandomInteger, getRandomArrayElement, debounce };
