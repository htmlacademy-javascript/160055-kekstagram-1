import {addPictures, addFiltersButtons} from './picture-render.js';
import {registerUploadFileButton} from './form-upload-modal.js';
import {picturesDownloadAlert} from './utils.js';
import {getData} from './get-post-api.js';

getData()
  .then((pictures) => {
    addPictures(pictures);
  })
  .then(addFiltersButtons)
  .catch(picturesDownloadAlert);

registerUploadFileButton();
