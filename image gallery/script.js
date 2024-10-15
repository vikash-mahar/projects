// Get all gallery items and the lightbox elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Add click event listeners to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the image source and open the lightbox
        const imageSrc = item.querySelector('img').getAttribute('data-src');
        lightboxImage.src = imageSrc;
        lightbox.style.display = 'block';
    });
});

// Add click event listener to the close button
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Implement lazy loading (optional)
window.addEventListener('scroll', () => {
    const visibleImages = document.querySelectorAll('.gallery-item img:visible');
    visibleImages.forEach(image => {
        if (!image.src) {
            image.src = image.getAttribute('data-src');
        }
    });
});