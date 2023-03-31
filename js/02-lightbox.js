import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img  class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
  `;
    })
    .join("");
}

lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: "250ms",
});
