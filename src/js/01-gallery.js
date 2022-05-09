import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
 
const creatDivElementmarkup = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}"/>
</a>
</div>
    `
}).join("");

galleryEl.insertAdjacentHTML('afterbegin', creatDivElementmarkup);
console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});
console.log(galleryItems);
