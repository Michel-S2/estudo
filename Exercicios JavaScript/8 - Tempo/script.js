//PEGAMOS O ELEMENTO FORM NO HTML
let form = document.querySelector('.busca');

//PEGAMOS O INPUT QUE O USUARIO DIGITARÁ A CIDADE
let input = document.querySelector('#searchInput');

//PEGAMOS A DIV QUE FICARÁ O RESULTADO DA PESQUISA
let resultado = document.querySelector('.resultado');

//PEGAMOS O TITULO PARA BOTAR A CIDADE
let titulo = document.querySelector('.titulo');

//PEGAMOS O ELEMENTO QUE VAI A TEMPERATURA
let temperatura = document.querySelector('.temp .tempInfo');

let img = document.querySelector('.temp img');

let velocidadeVento = document.querySelector('.vento .ventoInfo');

let ventoGraus = document.querySelector('.ventoArea .ventoPonto');

let p = document.querySelector('p');


//EVENTO PARA QUANDO CLICARMOS EM ENVIAR O FORMULARIO
form.addEventListener('submit', (enviar) => {

//CANCELA O ENVIO DO FORMULARIO
    enviar.preventDefault();

    displayNone()
    mostrarAviso('Carregando...')

//SE O INPUT DO USUARIO TER ALGO DIGITADO EXECUTARÁ ESSE TRECHO
    if(input.value !== '') {
        fetchClima(input.value);
        input.value = '';
    }

});


//FUNÇÃO PARA FAZER O FETCH NA API DO TEMPO
async function fetchClima(cidade) {

//VARIAVEL QUE ARMAZENA A RESPOSTA DA API('encodeURI' -> Serve para tirar os espaços da URL)
    let apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=9d2fb12091a41e94faddc7ac6827597b&units=metric&lang=pt_br`);

//SE O RETORNO DA API DER O STATUS 200 QUE SERIA QUE ESTÁ TUDO CERTO
    if(apiResponse.status == 200) {

//VARIAVEL QUE TRANSFORMA O OBJETO RECEBIDO DA API EM JSON
        let json = await apiResponse.json();
    
//FUNÇÃO PARA RENDERIZAR NA TELA AS INFORMAÇÕES
        renderizarClima({

//AQUI RESUMIMOS AS PROPRIEDADES QUE O JSON RETORNOU EM APENAS ESSAS
            cidade: json.name,
            pais: json.sys.country,
            temperatura: json.main.temp,
            icone: json.weather[0].icon,
            descricao: json.weather[0].description,
            velocidadeVento: json.wind.speed,
            ventoGraus: json.wind.deg
        })
    } else {
        displayNone()
        mostrarAviso('Localização não encontrada')
    }
};

//FUNÇÃO PARA RENDERIZAR AS INFORMAÇÕES NA TELA
function renderizarClima(infoDaCidade) {

//LIMPA O INPUT DO CARREGANDO
    mostrarAviso('');
    titulo.innerHTML = `${infoDaCidade.cidade} - ${infoDaCidade.pais}`;
    temperatura.innerHTML = `${infoDaCidade.temperatura} <sup>ºC</sup>`;
    img.setAttribute('src', `http://openweathermap.org/img/wn/${infoDaCidade.icone}@2x.png`);
    velocidadeVento.innerHTML = `${infoDaCidade.velocidadeVento} <span>km/h</span>`;
    ventoGraus.style.transform = `rotate(${infoDaCidade.ventoGraus-90}deg)`;
    p.innerHTML = `${infoDaCidade.descricao}`;

    displayBlock();

};

//FUNÇÃO PARA IMPRIMIR AVISOS NA TELA
function mostrarAviso(msg) {
    const aviso = document.querySelector('.aviso');
    aviso.innerHTML = msg;
}

//FUNÇÃO PARA MOSTRAR A DIV DE RESULTADO
function displayNone() {
    resultado.style.display = 'none';
}

//FUNÇÃO PARA ESCONDER A DIV DE RESULTADO
function displayBlock() {
    resultado.style.display = 'block';
}
