// import {postItems} from './data-posts-generator.js';
import {addPictures} from './picture-render.js';
import {registerUploadFileButton, closePictureFilterModal} from './form-upload-modal.js';

import {setUploadFormSubmit} from './form-validator.js';
import {getData} from './get-post-api.js';

getData()
  .then((pictures) => {
    addPictures(pictures);
  });

setUploadFormSubmit(closePictureFilterModal);
registerUploadFileButton();
