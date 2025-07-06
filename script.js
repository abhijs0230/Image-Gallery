const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = images[index].src;
}

images.forEach((img, i) => {
  img.addEventListener('click', () => showLightbox(i));
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Filters
const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    images.forEach(img => {
      const imgCategory = img.getAttribute('data-category');
      img.style.display = (category === 'all' || category === imgCategory) ? 'block' : 'none';
    });
  });
});
