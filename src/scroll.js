//*Efeito de scrool suave
const menuItems = document.querySelectorAll('#navbar a');

menuItems.forEach(item =>{
    item.addEventListener('click', scrollSuave);
});

function scrollSuave(event){
    event.preventDefault(); //Remove o comportamento padrão do evento
    const element = event.target;
    const destino = getScrollTopHref(element); 
    scrollToPosition(destino);
    
}
function scrollToPosition(destino){
    window.scroll({
        top: destino,
        behavior: 'smooth'
    });
}
function getScrollTopHref(element){
    const idDoElement = element.getAttribute('href');
    return document.querySelector(idDoElement).offsetTop;
}