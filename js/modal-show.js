const bigPicture = document.querySelector('.big-picture');
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

// Использую объявление функции через function для всплытия - для функции onModalEscapeKeydown
function closeModal () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscapeKeydown);
}

closeButton.addEventListener('click', () => {
  closeModal();
});

export { showModal };
