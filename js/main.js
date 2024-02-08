import {postItems} from './data-posts-generator.js';
//console.log(postItems); // eslint-disable-line
const dataPosts = postItems();
import {addPictures} from './picture-generator.js';
addPictures(dataPosts);
