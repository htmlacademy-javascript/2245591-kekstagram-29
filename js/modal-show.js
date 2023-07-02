const bigPicture = document.querySelector('.big-picture');
const picturesList = document.querySelector('.pictures');
const closeButton = document.querySelector('.big-picture__cancel');

const onModalEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const showModal = () => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscapeKeydown);
};

// Использую декларативное объявление функции для всплытия - для функции onModalEscapeKeydown
function closeModal() {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscapeKeydown);
}

picturesList.addEventListener('click', () => {
  showModal();
});
closeButton.addEventListener('click', () => {
  closeModal();
});
