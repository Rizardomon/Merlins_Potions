// menu dropdown mobile
var mudaImagemMenu = document.getElementById('dropdown');
var escondeCabecalho = document.getElementById('menu-principal');


//mostra menu mobile
function mostraMenuFunction() {
    var activateButton = document.getElementById('dropdown-itens').classList.toggle('showMenu');

}

// fechar menu
window.onclick = function(event) {
    if (!event.target.matches('.mobile-menu-icon')) {
        var dropdown = document.getElementsByClassName("mobile-menu-dropdown-itens");
        for (var i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('showMenu')) {
                openDropdown.classList.remove('showMenu');
            }
        }
    }
}


//Pegar as informações das poções pelo JSON
function getJSON() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json", false);
    xmlHttp.send(null);
    var myObj = JSON.parse(xmlHttp.responseText);
    return myObj;
}

function showInfos(id) {
    var myObj = getJSON();

    document.querySelector('#pocao-img').src = 'images/products/' + myObj.potions[id].image;
    document.querySelector('#pocao-nome').innerHTML = myObj.potions[id].name;
    document.querySelector('#pocao-efeito').innerHTML = myObj.potions[id].effect;
    document.querySelector('#pocao-preco').innerHTML = '$' + myObj.potions[id].price;

    var ul = document.querySelector('#pocao-ingrediente');
    ul.innerHTML = '';
    for (let i = 0; i < myObj.potions[id].ingredients.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = myObj.potions[id].ingredients[i];
    }

}

var pocao = document.getElementsByClassName('produto');
//Mostrar e fechar Modal
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    for (let i = 0; i < pocao.length; i++) {
        if (modal) {
            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {
                if (e.target.id == modalID || e.target.className == 'bt_modal') {
                    modal.classList.remove('mostrar');
                }
            });
        }
    }
}


for (let i = 0; i < pocao.length; i++) {
    pocao[i].addEventListener('click', () => iniciaModal('modal-pocao'));
}