import { displayThumbnails } from './display-thumbnails.js';

const imageFilters = document.querySelector('.img-filters');
const imageFiltersForm = document.querySelector('.img-filters__form');
const picturesList = document.querySelector('.pictures');

const getFilteringData = (data) => data;

const initFilters = (data) => {
  imageFilters.classList.remove('img-filters--inactive');

  imageFiltersForm.addEventListener('click', (event) => {
    if (event.target.closest('.img-filters__button')) {
      picturesList.querySelectorAll('.picture').forEach((image) => image.remove());
      displayThumbnails(getFilteringData(data));
    }
  });
};

export { initFilters };
