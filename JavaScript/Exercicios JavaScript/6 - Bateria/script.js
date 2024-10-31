//EVENTO PARA QUANDO CLICAR EM ALGUMA TECLA
document.body.addEventListener('keyup', (teclaApertada) => {

//FUNÇÃO PARA TOCAR O AUDIO DO HTML, COM PARAMETRO A TECLA QUE APERTAMOS
    tocarSom(teclaApertada.code.toLowerCase());
})

//EVENTO DE CLICK NO BOTÃO TOCAR
document.querySelector('.composer button').addEventListener('click', () => {

//VARIÁVEL QUE PEGARÁ AS LETRAS DIGITADAS NO INPUT E TRANSOFRMARÁ EM MINUSCULA
    let inputLetras = document.querySelector('#input').value.toLowerCase();

//SE O CAMPLO INPUT TIVER DIFERENTE DE VAZIO NO CASO TIVER LETRAS ENTRARÁ NESSE IF    
    if(inputLetras !== '') {
        let inputLetrasArray = inputLetras.split('');//VARIÁVEL QUE ARMAZENARÁ EM ARRAY A VARIÁVEL inputLetras
        tocarLetras(inputLetrasArray);//FUNÇÃO QUE TOCARÁ AS LETRAS DIGITADAS
    };
});


//FUNÇÃO PARA TOCAR O AUDIO DO HTML E MUDAR A CLASSE DAS TECLAS QUE FORAM PRESSIONADA
function tocarSom(som) {

//VARIÁVEL QUE RECEBE O AUDIO DO HTML, COM ID DINAMICO PARA RECEBER OS AUDIOS DE ACORDO COM A TECLA PRESSIONADA
    let audioHtml = document.querySelector(`#s_${som}`);

//VARIÁVEL QUE RECEBE AS TECLAS APERTADA COM O PARAMETRO DATA-KEY DO HTML
    let teclaPressionada = document.querySelector(`div[data-key="${som}"]`);

//SE A VARIÁVEL RECEBER O VALOR CORRETO COM O MESMO ID DO HTML ENTRARÁ NESSE IF
    if(audioHtml) {
        audioHtml.currentTime = 0;
        audioHtml.play();
    };

//SE A VARIÁVEL RECEBER O VALOR CORRETO COM O MESMO PARAMETRO DO HTML ENTRARÁ NESSE IF
    if(teclaPressionada) {
        teclaPressionada.classList.add('active');

        setTimeout(() => {
            teclaPressionada.classList.remove('active');
        }, 250)
    };
};

//FUNÇÃO QUE TOCARÁ O ARRAY DAS LETRAS DO INPUT
function tocarLetras(inputLetrasArray) {

//VARIÁVEL PARA FAZER UM TEMPO EM CADA EXECUÇÃO DO FOR
    let tempo = 0;

//FOR QUE FARÁ UM LOOPING DENTRO DOS INDICES DO ARRAY
    for(let i in inputLetrasArray) {

//FUNÇÃO PARA COLOCAR UM TEMPORIZADOR EM CADA VOLTA DO LOOPING
        setTimeout(() => {

//EXECUTARÁ A FUNÇAO TOCAR COM O PARAMETRO DE 'key' E OS ARRAY LETRA POR LETRA, ASSIM FICARÁ 'keyq, keyw, keye, etc'
            tocarSom(`key${inputLetrasArray[i]}`);
        }, tempo);

//TEMPORIZADOR A CADA VOLTA DO LOOPING TERÁ UM TEMPO DE 250 MILISSENGUNDOS ENTRE CADA EXECUÇÃO DO TIMEOUT PARA TER UM RITMO
        tempo += 250;
    }
};
