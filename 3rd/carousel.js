const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('.carouselImg');
let index = 0;//индекс для массива изображений
prevButton.addEventListener('click', () => {
    images.forEach((img) => img.classList.remove('shown'));//убираю активный статус с изображений
    images[index].classList.add('shown');//добавляю для конкретного
    index = (index - 1 + images.length) % images.length;//выражение, чтобы избежать выхода за рамки массива
})

function changeImage(images) {
    images.forEach((img) => img.classList.remove('shown'));
    images[index].classList.add('shown');
    index = (index + 1) % images.length;
}

nextButton.addEventListener('click', () => {
    changeImage(images);//тоже самое как из кнопкой назад, только здесь вызываю функцию в которой прописал параметры
})

setInterval(()=> changeImage(images), 3000);//интервал с автоматическим переключением в 3 сек
