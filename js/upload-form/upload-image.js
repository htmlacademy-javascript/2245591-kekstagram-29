import { initScale, resetScale } from './scale.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');

const imageUploadCancel = document.querySelector('.img-upload__cancel');

const onImageUploadCancelClick = () => {
  closeUploadForm();
};

const onDocumentKeydown = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeUploadForm();
  }
};

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imageUploadCancel.addEventListener('click', onImageUploadCancelClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeUploadForm () {
  resetScale();
  uploadForm.reset();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageUploadCancel.removeEventListener('click', onImageUploadCancelClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onUploadInputChange = () => {
  openUploadForm();
};

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
};

const initUploadForm = () => {
  initScale();
  uploadInput.addEventListener('change', onUploadInputChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
};

export { initUploadForm };
