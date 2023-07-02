import { showModal } from './modal-show.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');

const createComment = (item) => {
  const comment = socialComment.cloneNode(true);
  const avatar = comment.querySelector('.social__picture');
  const text = comment.querySelector('.social__text');
  avatar.src = item.avatar;
  avatar.alt = item.name;
  text.textContent = item.message;
  commentsList.append(comment);
};

const createCommentsList = ({ comments }) => {
  comments.forEach((comment) => commentsList.append(createComment(comment)));
};

const fillBigPicture = (data) => {
  bigPictureImage.src = data.url;
  bigPictureImage.alt = data.description;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  socialCaption.textContent = data.description;
  createCommentsList(data);
};

const displayBigPicture = (data) => {
  fillBigPicture(data);
  showModal();
};

export { displayBigPicture };
