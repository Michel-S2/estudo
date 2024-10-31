let form = document.querySelector('form');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const filme = document.querySelector('.title-movie').value;
    const duracao = document.querySelector('.duration-movie').value;

    const horas = Math.floor(duracao / 60); //converte os minutos em hora
    const minutos = duracao % 60; //converte o numero passado em minutos

    h3.innerText = filme;
    h4.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
})
