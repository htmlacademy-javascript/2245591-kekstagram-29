import { createPhotoDescriptions } from './create-photo-descriptions.js';

const picturesList = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const descriptionsList = createPhotoDescriptions();

const createThumbnail = (item) => {
  const photoThumbnail = photoThumbnailTemplate.cloneNode(true);
  const imageTemplate = photoThumbnail.querySelector('.picture__img');

  imageTemplate.src = item['url'];
  imageTemplate.alt = item['description'];
  photoThumbnail.querySelector('.picture__likes').textContent = item['likes'];
  photoThumbnail.querySelector('.picture__comments').textContent = item['comments'].length;

  return photoThumbnail;
};

const displayThumbnails = () => {
  const thumbnailsListFragment = document.createDocumentFragment();

  descriptionsList.forEach((item) => {
    const photoThumbnail = createThumbnail(item);
    thumbnailsListFragment.append(photoThumbnail);
  });

  picturesList.append(thumbnailsListFragment);
};

export {displayThumbnails};
