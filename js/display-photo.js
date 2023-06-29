import {createPhotoDescriptions} from './create-photo-descriptions.js';

const picturesList = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const thumbnailsListFragment = document.createDocumentFragment();

const descriptionsList = createPhotoDescriptions();

descriptionsList.forEach((description) => {
  const photoThumbnail = photoThumbnailTemplate.cloneNode(true);
  const imageTemplate = photoThumbnailTemplate.querySelector('.picture__img');
  const likesNumber = photoThumbnailTemplate.querySelector('.picture__likes');
  const comments = photoThumbnailTemplate.querySelector('.picture__comments');
  imageTemplate.src = description['url'];
  imageTemplate.alt = description['description'];
  likesNumber.textContent = description['likes'];
  comments.textContent = description['comments'].length;
  thumbnailsListFragment.append(photoThumbnail);
}
);

picturesList.append(thumbnailsListFragment);
