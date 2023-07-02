const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const onModalEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const showModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.addEventListener('keydown', onModalEscapeKeydown);
};

// Использую объявление функции через function для всплытия - для функции onModalEscapeKeydown
function closeModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onModalEscapeKeydown);
}

closeButton.addEventListener('click', () => {
  closeModal();
});

export { showModal };
