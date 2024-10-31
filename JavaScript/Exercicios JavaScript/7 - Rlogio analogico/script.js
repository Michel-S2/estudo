//PEGAMOS O ELEMENTO QUE MOSTRARÁ A HORA EM FORMATO DIGITAL
let relogioDigital = document.querySelector('.digital');

//PONTEIRO DOS SEGUNDOS
let ponteiroSegundos = document.querySelector('.p_s');

//PONTEIRO DOS MINUTOS
let ponteiroMinutos = document.querySelector('.p_m');

//PONTEIRO DAS HORAS
let ponteiroHoras = document.querySelector('.p_h');


//FUNÇÃO PARA MOSTRAR A HORA
function horaAtualizada() {
    let dataAtual = new Date();//CLASSE PARA PEGAR A DATA ATUAL
    let segundos = dataAtual.getSeconds();//SEGUNDOS ATUAL
    let minutos = dataAtual.getMinutes();//MINUTOS ATUAL
    let horas = dataAtual.getHours();//HORAS ATUAL

//ADICIONAMOS NA TELA A HORA ATUAL COM A FUNÇÃO PARA COLOCAR O ZERO ANTES SE O HORARIO FOR MENOR QUE 10
    relogioDigital.innerHTML = `${horarioComZero(horas)}:${horarioComZero(minutos)}:${horarioComZero(segundos)}`;

//VARIÁVEL PARA ARMAZENAR OS GRAUS DE CADA SEGUNDO PARA O PONTEIRO SE MOVER
    let segundosComGraus = (360 / 60) * segundos - 90;
    ponteiroSegundos.style.transform = `rotate(${segundosComGraus}deg)`;

//VARIÁVEL PARA ARMAZERNAR OS GRAUS DE CADA MINUTO PARA O PONTEIRO SE MOVER
    let minutosComGraus = (360 / 60) * minutos - 90;
    ponteiroMinutos.style.transform = `rotate(${minutosComGraus}deg)`;

//VARIÁVEL PARA ARMAZENAS OS GRAUS DE CADA HORA PARA O PONTEIRO SE MOVER
    let horasComGraus = (360 / 12) * horas - 90;
    ponteiroHoras.style.transform = `rotate(${horasComGraus}deg)`;
};

//FUNÇÃO RESPONSÁVEL POR COLOCAR 0 NA HORA SE ELA FOR MENOR QUE 10
function horarioComZero(horarioSemZero) {

    //IRÁ RETORNAR 0 MAIS O PARAMETRO ESOLHIDO SE FOR MENOR QUE 10
    return horarioSemZero < 10 ? `0${horarioSemZero}` : horarioSemZero
};

//TIMER PARA EXECUTAR NOSSA FUNÇÃO A CADA 1 SEGUNDO
setInterval(horaAtualizada, 1000);

//FUNÇÃO PARA ATUALIZAR O HORARIO ASSIM QUE CARREGAR A PÁGINA
horaAtualizada();

//DARKMODE
let checkbox = document.querySelector('div #check');//PEGAMOS O ELEMENTO CHECKBOX

//AO CLICAR NO CHECKBOX EXECUTA ESSA FUNÇÃO QUE TROCA A CLASSE DO BODY E SE CLICAR DE NOVO REMOVE ESSA CLASSE
checkbox.addEventListener('click', () => {
    document.body.classList.toggle('light');
});