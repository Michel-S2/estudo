let totalSlides = document.querySelectorAll('.item-banner').length;
let currentSlide = 0;
let sliderlWidth = document.querySelector('.slider').clientWidth
let temporizador = '';

document.querySelector('.slider-width').style.width = `${sliderlWidth * totalSlides}px`;

document.querySelector('.slider-controls').style.width = `${sliderlWidth}px`;

document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateMargin();
    atualizarTemporizador();

}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    updateMargin();
    atualizarTemporizador();

}


function updateMargin() {
    let itemBannerWidth = document.querySelector('.item-banner').clientWidth;
    let newMargin = currentSlide * itemBannerWidth;
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

function timer() {
    temporizador = setInterval(goNext, 5000);
}

function atualizarTemporizador() {
    clearInterval(temporizador);
    timer();
}

timer();