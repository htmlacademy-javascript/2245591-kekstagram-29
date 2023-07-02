// Импортирую функцию создания моков в main для того, чтобы в дальнейшем можно было здесь же моки заменить на реальные данные
import {createPhotoDescriptions} from './create-photo-descriptions.js';
import {displayThumbnails} from './display-thumbnails.js';

displayThumbnails(createPhotoDescriptions());
