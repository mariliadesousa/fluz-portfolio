const categories = document.querySelectorAll('.category-buttons button');
const gallerySlider = document.getElementById('gallery-slider');

const images = {
  paisagem: [
    'images/image-10.png',
    'images/image-20.png',
    'images/image-30.png',
    'images/image-40.png',
    'images/image-50.png'
  ],
  retrato: [
    'https://source.unsplash.com/800x400/?portrait',
    'https://source.unsplash.com/800x400/?person',
    'https://source.unsplash.com/800x400/?face'
  ],
  comidas: [
    'https://source.unsplash.com/800x400/?food',
    'https://source.unsplash.com/800x400/?meal',
    'https://source.unsplash.com/800x400/?dessert'
  ]
};

let currentCategory = 'paisagem';

function loadImages(category) {
  gallerySlider.style.transform = 'translateX(100%)';
  setTimeout(() => {
    gallerySlider.innerHTML = '';
    images[category].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'gallery-image';
      gallerySlider.appendChild(img);
    });
    gallerySlider.style.transform = 'translateX(100%)';
    void gallerySlider.offsetWidth;
    gallerySlider.style.transform = 'translateX(0)';
  }, 100);
}

categories.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.category === currentCategory) return;
    categories.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    loadImages(currentCategory);
  });
});

loadImages(currentCategory);
