let timer 
let deleteSlide

async function fetchApiDog() {
    let apiResponse = await fetch(`https://dog.ceo/api/breeds/list/all`);
    let json = await apiResponse.json();
    createListDog(json.message);    
}

fetchApiDog();

function createListDog(listDog) {
    document.querySelector('#listaRaça').innerHTML = `
    <select onchange='carregarCao(this.value)'>
        <option>Escolha uma Raça</option>
        ${Object.keys(listDog).map(function (cao) {
            return `<option>${cao}</option>`
        }).join('')}
    </select>
    `;
}

async function carregarCao(cao) {
    if(cao !== 'Escolha uma Raça') {
        const responseIMG = await fetch(`https://dog.ceo/api/breed/${cao}/images`);
        const json = await responseIMG.json();
        createSlideCao(json.message);
    }
}

function createSlideCao(images) {
    let currentPosition = 0;
    clearInterval(timer);
    clearTimeout(deleteSlide);

    if(images.length > 1) {
        document.querySelector('.resultado').innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}');"></div>
        <div class="slide" style="background-image: url('${images[1]}');"></div>
        `;
        currentPosition += 2;
        if(images.length == 2) currentPosition = 0;
        timer = setInterval(nextSlide, 4000);

    } else {
        document.querySelector('.resultado').innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}');"></div>
        <div class="slide"></div>`
    }

    function nextSlide() {
        document.querySelector('.resultado').insertAdjacentHTML('beforeend', `<div class="slide" style="background-image: url('${images[currentPosition]}');"></div>`);
        deleteSlide = setTimeout(() => {
            document.querySelector('.slide').remove();
        }, 1000);

        if(currentPosition + 1 > images.length) {
            currentPosition = 0;
        } else {
            currentPosition ++;
        }
    }
}