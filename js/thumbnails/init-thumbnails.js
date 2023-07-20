import { displayThumbnails } from './display-thumbnails.js';
import { getData } from '../utils/api.js';
import { initFilters } from './filters.js';
import { createTemplate } from '../upload-form/messages-template.js';

const DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const ERROR_MESSAGE = 'Ошибка загрузки. Попробуйте позже';
const ERROR_BUTTON_MESSAGE = 'Обновить страницу';
const ERROR_CLASS_NAME = 'error';

const onErrorButtonClick = () => {
  location.reload();
};

const onGetSuccess = (data) => {
  initFilters(data);
  displayThumbnails(data);
};

const onGetError = () => {
  createTemplate(ERROR_MESSAGE, ERROR_BUTTON_MESSAGE, ERROR_CLASS_NAME, true);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', onErrorButtonClick);
};

const initThumbnails = () => getData(DATA_URL, onGetSuccess, onGetError);

export { initThumbnails };
