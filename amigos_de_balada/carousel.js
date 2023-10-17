var images = document.querySelectorAll('.carousel-images img');
var currentIndex = 0;
var timeInterval = 3000; // tempo em milissegundos para mudar a imagem

function changeImage() {
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('active');
}

setInterval(changeImage, timeInterval);
