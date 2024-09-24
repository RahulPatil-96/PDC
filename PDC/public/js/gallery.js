// gallery.js
// Add any JavaScript related to the gallery here.
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-item');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            alert('You clicked on an image!');
        });
    });
});
