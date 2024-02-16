import {postItems} from './data-posts-generator.js';
const dataPosts = postItems();
import {addPictures} from './picture-generator.js';
addPictures(dataPosts);
import {openPictureModal, closePictureModal} from './popup.js';
