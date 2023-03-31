import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onGalleryLinstClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `;
    })
    .join("");
}

function onGalleryLinstClick(evt) {
  evt.preventDefault();
  console.dir(evt.target.dataset);
  const largeImage = evt.target.dataset.source;
  const modal = basicLightbox.create(
    `<img width="1200" height="800" src="${largeImage}"/>`
  );
  modal.show();
  document.addEventListener("keydown", EscPress);

  function EskPress(evt) {
    if (evt.key === "Escape") {
      modal.close();
      console.log(evt.key);
      document.removeEventListener("keydown", EskPress);
    }
  }
}
