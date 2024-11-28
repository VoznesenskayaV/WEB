const images = ['img/lw5_1.jpg', 'img/lw5_2.jpg', 'img/lw5_3.jpg']; 
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
  sliderImage.src = images[currentIndex];
}

prevBtn.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
