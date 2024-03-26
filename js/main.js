import {registerUploadFileButton} from './form-upload-modal.js';
import {picturesDownloadAlert, debounce} from './utils.js';
import {getData} from './get-post-api.js';
import {registerFilterEvent} from './filter-sort-picture.js';
const RENDER_DELAY = 500;
getData()
  .then((pictures) => {
    debounce(registerFilterEvent(pictures), RENDER_DELAY,);
  })
  .catch(picturesDownloadAlert);

registerUploadFileButton();
