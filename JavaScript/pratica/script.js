import TypeIt from "typeit";


document.addEventListener('DOMContentLoaded',() => {
    new TypeIt(".animacao", {
        speed: 200,
        string: 'Web front end',
        loop: true
    }).go()
})