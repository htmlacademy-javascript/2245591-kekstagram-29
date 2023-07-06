const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
const commentsList = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const closeButton = document.querySelector('.big-picture__cancel');
const moreButton = document.querySelector('.social__comments-loader');

const hideElements = () => {
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeModal();
  }
};

const onCloseButtonClick = () => {
  closeModal();
};

const onShowMoreClick = () => {};

const showModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButtonClick);
  moreButton.addEventListener('click', onShowMoreClick);
};

// Использую объявление функции через function для всплытия - для функции onModalEscapeKeydown
function closeModal() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButtonClick);
  moreButton.removeEventListener('click', onShowMoreClick);
}

const createComment = (item) => {
  const comment = socialComment.cloneNode(true);
  const avatar = comment.querySelector('.social__picture');
  avatar.src = item.avatar;
  avatar.alt = item.name;
  comment.querySelector('.social__text').textContent = item.message;
  return comment;
};

const createCommentsList = ({ comments }) => {
  comments.forEach((comment) => commentsList.append(createComment(comment)));
};

const fillBigPicture = (data) => {
  bigPictureImage.src = data.url;
  bigPictureImage.alt = data.description;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;
  createCommentsList(data);
};

const displayBigPicture = (data) => {
  commentsList.innerHTML = '';
  hideElements();
  fillBigPicture(data);
  showModal();
};

export { displayBigPicture };
