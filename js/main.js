import {postItems} from './data-posts-generator.js';
import {addPictures} from './picture-render.js';
import {registerUploadFileButton} from './form-upload-modal.js';
//import {openPictureModal} from './popup.js';
//const dataPosts = postItems();
addPictures(postItems());
registerUploadFileButton();
