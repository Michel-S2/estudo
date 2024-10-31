let avisoDog = document.querySelector('.avisoDog');
let avisoCat = document.querySelector('.avisoCat')
const resultDog = document.querySelector('.dogSlide');
const resultCat = document.querySelector('.catSlide');
const buttonCat = document.querySelector('.catButton').addEventListener('click', fetchCat)
const buttonDog = document.querySelector('.dogButton').addEventListener('click', fetchDog);

async function fetchDog() {
    resultDog.style.backgroundImage = `url()`;
    avisoDog.innerHTML = `Carregando...`
   
    let responseApi = await fetch('https://dog.ceo/api/breeds/image/random');
    let json = await responseApi.json();
    
     avisoDog.innerHTML = ``
    resultDog.style.backgroundColor = 'rgba(214, 214, 214, 0)';
    resultDog.style.backgroundImage = `url(${json.message})`;
    avisoDog.innerHTML = ``
}



async function fetchCat() {
    resultCat.style.backgroundImage = `url()`;
    avisoCat.innerHTML = `Carregando...`
   
    let responseApi = await fetch('https://api.thecatapi.com/v1/images/search');
    let json = await responseApi.json();
    console.log(json);
    
    avisoCat.innerHTML = ``
    resultCat.style.backgroundColor = 'rgba(214, 214, 214, 0)';
    resultCat.style.backgroundImage = `url(${json[0].url})`;
    avisoCat.innerHTML = ``
}