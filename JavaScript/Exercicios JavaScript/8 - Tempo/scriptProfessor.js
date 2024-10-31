let input = document.querySelector('#searchInput');
let form = document.querySelector('.busca');

let resultado = document.querySelector('.resultado');
let cidadePais = document.querySelector('.titulo');
let temperaturaInfo = document.querySelector('.tempInfo');
let img = document.querySelector('.temp img');
let ventoInfo = document.querySelector('.ventoInfo');
let ventoAngulo = document.querySelector('.ventoPonto');
let p = document.querySelector('.resultado p');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderClima(input.value);
});



async function fetchClima(cidade) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=9d2fb12091a41e94faddc7ac6827597b&units=metric&lang=pt_br`;

    let apiResponse = await fetch(url);
    if(apiResponse.status === 200) {
        const json = await apiResponse.json();
        return {
            cidade: json.name,
            pais: json.sys.country,
            temperatura: json.main.temp,
            icone: json.weather[0].icon,
            descricao: json.weather[0].description,
            velocidadeVento: json.wind.speed,
            ventoAngulo: json.wind.deg
        };
    }
};

function mostrarMensagem(msg) {
    document.querySelector('.aviso').innerHTML = msg;
};

function limparTela() {
    document.querySelector('.resultado').style.display = 'none';
}

async function renderClima(cidade) {
    const json = await fetchClima(cidade);

    if(input !== '') {
        mostrarMensagem('carregando...');
        mostrarMensagem('');
        input.value = '';
    }

    if(json) {
        cidadePais.innerHTML = `${json.cidade} - ${json.pais}`;
        temperaturaInfo.innerHTML = `${json.temperatura} <sup>ºC</sup></div>`
        img.setAttribute(`src`, `http://openweathermap.org/img/wn/${json.icone}@2x.png`);
        ventoInfo.innerHTML = `${json.velocidadeVento} <span>km/h</span>`;
        ventoAngulo.style.transform = `rotate(${json.ventoAngulo -90}deg)`;
        p.innerHTML = `${json.descricao}`;
        resultado.style.display = 'block';
    } else {
        limparTela();
        mostrarMensagem('Localização não encontrada');
    }
};