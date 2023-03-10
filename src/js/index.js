import { newCard } from "./Components/card-pokmon.js";
import { generateBtn } from "./Components/generate-btn.js";
import { generateModal } from "./Components/modal-poke.js";


export async function fetchPokeEsp(id) {
    const APIpoke = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(APIpoke).then(res => res.json());

    await newCard(response);
}

let a = 1;
let b = 12;

while (a <= b) {
    await fetchPokeEsp(a);
    a++
};

const morepk = document.querySelector('#morePk');
morepk.addEventListener('click', () => {
    a += 0;
    b += 24;
    
    now({a, b});
    return a+= 24;
});

function now({a,b}) {
    let c = a;
    let d = b;

    while (c<= d) {
        fetchPokeEsp(c);
        c++
    };
};

document.querySelector('#backtotop').addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

const searchPoke = document.querySelector('.search__button');
const inputSearch = document.querySelector('.search__input');

window.onload = searchPoke.addEventListener('click', async () => {
    if (inputSearch.value !== '' &&  typeof inputSearch.value === 'string') {
        const url = `https://pokeapi.co/api/v2/pokemon/${inputSearch.value.toLowerCase()}/`;
        const API = await fetch(url).then((res) => res.json());
        inputSearch.value = '';
        inputSearch.disabled = true;
        return generateModal(API);
    };
});

window.onload = inputSearch.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter' && inputSearch.value !== '' &&  typeof inputSearch.value === 'string') {
        const url = `https://pokeapi.co/api/v2/pokemon/${inputSearch.value.toLowerCase()}/`;
        const API = await fetch(url).then((res) => res.json());
        inputSearch.value = '';
        inputSearch.disabled = true;
        return generateModal(API);
    };
});
    

window.onload = generateBtn();
