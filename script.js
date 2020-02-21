// menu dropdown mobile
const mudaImagemMenu = document.getElementById('dropdown');
const escondeCabecalho = document.getElementById('menu-principal');
const barraBusca = document.getElementById('mobile-search-container');


//mostra menu mobile
function mostraMenuFunction() {
    const activateButton = document.getElementById('dropdown-itens').classList.toggle('showMenu');

    if (activateButton) {
        showElements()
    } else {
        hideElements()
    }
}

function showElements() {
    mudaImagemMenu.src = 'images/icons/menu-close-icon.png';
    escondeCabecalho.style = 'display: none';
    barraBusca.style = 'display: block'
}

function hideElements() {
    mudaImagemMenu.src = 'images/icons/menu-icon.png';
    escondeCabecalho.style = 'display: flex';
    barraBusca.style = 'display: none'
}

// fechar menu
window.onclick = function(event) {
    if (!event.target.matches('.mobile-menu-icon') && !event.target.matches('.input-search-stock')) {
        const dropdown = document.getElementsByClassName("mobile-menu-dropdown-itens");
        for (var i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('showMenu')) {
                openDropdown.classList.remove('showMenu');
                mudaImagemMenu.src = 'images/icons/menu-icon.png';
                escondeCabecalho.style = 'display: flex'
                barraBusca.style = 'display: none'
            }
        }
    }
}


//Pegar as informações das poções pelo JSON
function getJSON() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json", false);
    xmlHttp.send(null);
    const myObj = JSON.parse(xmlHttp.responseText);
    return myObj;
}

function showInfos(id) {
    const myObj = getJSON();

    document.querySelector('#pocao-img').src = 'images/products/' + myObj.potions[id].image;
    document.querySelector('#pocao-nome').innerHTML = myObj.potions[id].name;
    document.querySelector('#pocao-efeito').innerHTML = myObj.potions[id].effect;
    document.querySelector('#pocao-preco').innerHTML = '$' + myObj.potions[id].price;

    const ul = document.querySelector('#pocao-ingrediente');
    ul.innerHTML = '';
    for (let i = 0; i < myObj.potions[id].ingredients.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = myObj.potions[id].ingredients[i];
    }

}

const pocao = document.getElementsByClassName('produto');
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