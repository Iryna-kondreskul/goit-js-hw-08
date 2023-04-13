// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {createdGalery} from './gallary_function';
import simpleLightbox from 'simplelightbox';

document.querySelector(".gallery").insertAdjacentHTML("beforeend", createdGalery(galleryItems));

var gallery = new SimpleLightbox(".gallery a", {});





 