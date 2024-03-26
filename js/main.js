import {registerUploadFileButton} from './form-upload-modal.js';
import {picturesDownloadAlert} from './utils.js';
import {getData} from './get-post-api.js';
import {registerFilterEvent} from './filter-sort-picture.js';

getData()
  .then((pictures) => {
    registerFilterEvent(pictures);
  })
  .catch(picturesDownloadAlert);

registerUploadFileButton();
