import {postItems} from './data-posts-generator.js';
import {addPictures} from './picture-render.js';
import {registerUploadFileButton} from './form-upload-modal.js';

addPictures(postItems());
registerUploadFileButton();
