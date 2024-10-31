let digitalElemento = document.querySelector('.digital');
let ponteiroSegundos = document.querySelector('.p_s');
let ponteiroMinutos = document.querySelector('.p_m');
let ponteiroHoras = document.querySelector('.p_h');
let checkbox = document.querySelector('#check');
checkbox.addEventListener('click', () => {
    document.body.classList.toggle('dark')

})

function horaAgora() {
    let dataAtual = new Date();
    let segundos = dataAtual.getSeconds();
    let minutos = dataAtual.getMinutes();
    let horas = dataAtual.getHours();

    digitalElemento.innerHTML = `${horaComZero(horas)}:${horaComZero(minutos)}:${horaComZero(segundos)}`;

    let grausDeSegundos = (360 / 60) * segundos - 90;
    ponteiroSegundos.style.transform = `rotate(${grausDeSegundos}deg)`;

    let grausDeMinutos = (360 / 60) * minutos - 90;
    ponteiroMinutos.style.transform = `rotate(${grausDeMinutos}deg)`;

    let grauDeHoras = (360 / 12) * horas - 90;
    ponteiroHoras.style.transform = `rotate(${grauDeHoras}deg)`;
};

function horaComZero(horario) {
    return horario < 10 ? `0${horario}` : horario
};

setInterval(horaAgora, 1000);
horaAgora();