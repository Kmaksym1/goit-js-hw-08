// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryEL = document.querySelector('.gallery');
const markup = galleryItems.map(({ description, preview, original}) =>
    `<a class="gallery__item" href="${original}">
    <img 
    class= "gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}"
    />
    </a>`
    ).join('')
galleryEL.insertAdjacentHTML('beforeend', markup)
const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });




    