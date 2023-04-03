// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};
const galleryMarkup = galleryItems.reduce((acc, item) => {
  return acc + createGalleryItemMarkup(item);
}, "");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// galleryRef.addEventListener("click", lightBox);

// function lightBox(event) {
//     event.preventDefault();
//     const img = event.target.dataset.source;
// }

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

// console.log(galleryItems);
