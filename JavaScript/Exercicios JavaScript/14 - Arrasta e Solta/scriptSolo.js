//Objeto para fazer a sequência dos numeros corretos, essas letras é por causa do atributo das tag
let areas = {
    a: null,
    b: null,
    c: null
}


//Selecionamos todos os elementos com a classe item no html e passamos 2 eventos nele para conseguirmos arrastar as div
document.querySelectorAll('.item').forEach(elementosHtml => {
    elementosHtml.addEventListener('dragstart', dragStart);
    elementosHtml.addEventListener('dragend', dragEnd);
});



//Selecionamos os elementos com a classe area no html e adicionamos os 3 eventos para arrastar sair e soltar
document.querySelectorAll('.area').forEach(elementosArea => {
    elementosArea.addEventListener('dragover', dragOver);
    elementosArea.addEventListener('dragleave', dragLeave);
    elementosArea.addEventListener('drop', drop);
})



//Selecionamos esse elemento e adicionams os 3 eventos nele
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);



//Função responsavel por dar inicio quando pegamos uma div
function dragStart(e) {

//De acordo com a div que pegamos colocamos essa classe para deixar o fundo com menos opacidade
    e.currentTarget.classList.add('dragging');
    
}



//Função quando soltamos a div
function dragEnd(e) {

//Quando soltamos a div remove a classe que adicionamos anteriormente
    e.currentTarget.classList.remove('dragging');
}



//Função para quando arrastamos o item em uma area que queremos soltar
function dragOver(e) {

//Se não tiver item no quadrado que vamos soltar executará esse laço
    if(e.currentTarget.querySelector('.item') === null) {

//remove o padrão que seria proibido soltar a div
        e.preventDefault()

//adicionamos a classe hover no elemento que passamos por cima
        e.currentTarget.classList.add('hover')
    }
    
}



//Quando saimos do elemento ativa essa função que remove a classe
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');

}



//Função é ativada quando dropamos algo na div
function drop(e) {
    e.currentTarget.classList.remove('hover'); //remove o hover da div

//Se não tiver item na div selecionada entrará nesse laço
    if(e.currentTarget.querySelector('.item') === null) {

//variavel que armazena o item que estamos carregando(arrastando) no momento
       let dragItem = document.querySelector('.item.dragging');

//adicionamos o item que estamos carregando na div que o mouse passará por cima
       e.currentTarget.appendChild(dragItem);

//Função que faz uma verificação para ver se está na sequência correta
       updateAreas()
    }
    
}



//Função para quando arrastamos o item em uma area que queremos soltar
function dragOverNeutral(e) {

//Deixa a area permitindo para soltar a div
    e.preventDefault();
    e.currentTarget.classList.add('hover'); //Adiciona essa classe na area
}



//Quando saimos do elemento ativa essa função que remove a classe
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}



//Função é ativada quando dropamos algo na div
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover'); //remove a classe

    let dragItem = document.querySelector('.item.dragging'); //Armazena o item que estamos arrastando nessa variavel

    e.currentTarget.appendChild(dragItem);//Adicionamos no elemento que queremos soltar essa variavel com o item
    updateAreas();//Função que faz uma verificação para ver se está na sequência correta
}



//Função que faz uma verificação para ver se está na sequência correta
function updateAreas() {

//Pegamos todos elementos que tem a classe area e entramos em cada um com o forEach
    document.querySelectorAll('.area').forEach(elementosArea => {

//Criamos essa variavel para armazenar os atributos de cada elemento com classe area
        let atributos = elementosArea.getAttribute('data-name');


//Se os elementos com classe area tiver um com a classe item diferente de nulo ou seja a area estará preenchida. Entrará nesse laço
        if(elementosArea.querySelector('.item') !== null) {

//Nosso objeto areas com os parametros de nosso atributo receberá os itens que estão dentro dos nossos elementos areas com o innerHTML
            areas[atributos] = elementosArea.querySelector('.item').innerHTML;
        } else {
            areas[atributos] = null; //Se nao tiver item nenhum nos elementos areas receberá nulo nosso objeto
        }
    });


//Se o nosso objeto de atributo a, b e c forem iguais a '1, 2 e 3' entrará nesse laço e add a classe correct para formar a linha verde
    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
    } else {

//Se não for essa sequência entrará nesse else que removerá a classe correct e tirará a linha verde
        document.querySelector('.areas').classList.remove('correct');
    }
}
