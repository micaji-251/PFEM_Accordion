// OBJETIVO al presionar el boton tiene que aparecer el texto que va dentro del titulo, el sectionText, al presionar nuevamente tiene que desaparacer.


const main = document.getElementById('main');
let btnContainer='';
let textContainer = '';

loadListeners();

function loadListeners(){
main.addEventListener('click', getButtonParent);

}

function getButtonParent(e){
    if(e.target.classList.contains('btnExpand')){
        btnContainer = e.target.parentElement.parentElement;
        catchTextContainer();
    }
}

function catchTextContainer(){

    textContainer = btnContainer.querySelector('.sectionText');

    if(textContainer.classList.contains('none')){
        openContainer();
    }else{
        closeContainer();
    }
    

}

function openContainer(){

    textContainer.classList.remove('none');
}

function closeContainer(){
    textContainer.classList.add('none');
}