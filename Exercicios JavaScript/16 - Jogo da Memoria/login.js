const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');


//===========EVENTOS DE CLIQUES=======================================

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);





//==============FUNÇÕES======================================================

function validateInput(event) {

//Pegamos o evento do input e vimos se o valor digitado é maior que 3 se for maior que 3 removerá o atributo disabled do botão, o return serve para parar a execução e não continuar 0 código assim não precisamos usar else
    if(event.target.value.length > 3) {
        button.removeAttribute('disabled');
        return
    }

    button.setAttribute('disabled', '');
}


function handleSubmit(event) {

//Bloqueamos o envio do formulario
    event.preventDefault();

//Salvamos o valor que o usuario digitou no local storage da pagina
    localStorage.setItem('Player', input.value);

//Transferimos o usuario para essa nova pagina html
    window.location = 'page/game.html';
}
