document.body.addEventListener('keyup', (teclaApertada) => {
    tocarSom(teclaApertada.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let sequenciaSom = document.querySelector('#input').value;
    

    if(sequenciaSom !== '') {
        let sequenciaSomArray = sequenciaSom.split('');
        tocarLetra(sequenciaSomArray);
    }

});




function tocarSom(tecla) {
    let audio = document.querySelector(`#s_${tecla}`);
    let teclaApertada = document.querySelector(`div[data-key="${tecla}"]`);

    if(audio) {
        audio.currentTime = 0;
        audio.play();
    };


    if(teclaApertada) {
        teclaApertada.classList.add('active');

        setTimeout(() => {
            teclaApertada.classList.remove('active')
        }, 250)
    }
}


function tocarLetra(sequenciaSomArray) {
    let tempo = 0;

    for(let i in sequenciaSomArray) {
        setTimeout(() => {
            tocarSom(`key${sequenciaSomArray[i]}`)
        }, tempo);

        tempo += 250;
    }
};