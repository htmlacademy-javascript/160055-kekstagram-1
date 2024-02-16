import {postItems} from './data-posts-generator.js';
import {addPictures} from './picture-generator.js';
//import {openPictureModal, closePictureModal} from './popup.js';
const dataPosts = postItems();
addPictures(dataPosts);
