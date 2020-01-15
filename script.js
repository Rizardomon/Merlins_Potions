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




potionInfos = [{
        "id": 0,
        "name": "Aging Potion",
        "image": "aging-potion.png",
        "price": 29.99,
        "effect": "Causes the drinker to advance in age",
        "ingredients": [
            "Red Wine",
            "Prune Juice",
            "Hairy Fungus",
            "Tortoise Shell",
            "Caterpillar",
            "Bat Tongue"
        ]
    },
    {
        "id": 1,
        "name": "Bulgeye Potion",
        "image": "bulgeye-potion.png",
        "price": 19.99,
        "effect": "It affects one's eyes, causing them to swell",
        "ingredients": [
            "Beetle eyes",
            "Eel eyes"
        ]
    },
    {
        "id": 2,
        "name": "Dragon Tonic",
        "image": "dragon-tonic.png",
        "price": 64.99,
        "effect": "A tonic used to cure sick dragons",
        "ingredients": [
            "Eagle Owl feathers",
            "Peacock feathers",
            "Giant Purple Toad warts"
        ]
    },
    {
        "id": 3,
        "name": "Love Potion",
        "image": "love-potion.png",
        "price": 29.99,
        "effect": "The one who drinks it falls deeply in love with the first person they see",
        "ingredients": [
            "Petals from a red rose",
            "Essence of violet",
            "Canary flight and down feathers",
            "Newt eyes"
        ]
    },
    {
        "id": 4,
        "name": "Polyjuice Potion",
        "image": "polyjuice-potion.png",
        "price": 99.99,
        "effect": "Allows the drinker to assume the form of someone else",
        "ingredients": [
            "Lacewing flies",
            "Leeches",
            "Powdered bicorn horn",
            "Knotgrass",
            "Fluxweed",
            "Shredded Boomslang skin"
        ]
    },
    {
        "id": 5,
        "name": "Sleeping Draught",
        "image": "sleeping-draught.png",
        "price": 29.99,
        "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
        "ingredients": [
            "Sprigs of Lavender",
            "Measures of Standard Ingredient",
            "Blobs of Flobberworm Mucus",
            "Valerian sprigs"
        ]
    }
]

var pocao = document.getElementsByClassName('produto');
//Mostrar e fechar Modal
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    for (let i = 0; i < pocao.length; i++) {
        if (modal) {
            modal.classList.add('mostrar');

            document.getElementById('pocao-img').src = 'images/products/' + potionInfos[i].image;
            document.getElementById('pocao-nome').innerHTML = potionInfos[i].name;
            document.getElementById('pocao-efeito').innerHTML = potionInfos[i].effect;
            document.getElementById('pocao-preco').innerHTML = potionInfos[i].price;

            for (let j = 0; j < potionInfos[i].ingredients.length; j++) {
                document.getElementById('pocao-ingrediente').innerHTML = potionInfos[i].ingredients[j];
            }


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