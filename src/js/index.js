import { newCard } from "./Components/card-pokmon.js";

async function fetchPokeEsp( id) {
    const APIpoke = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(APIpoke).then(res => res.json());

    await newCard(response);
}

let a = 1
let b = 12


while (a <= b) {
    await fetchPokeEsp(a)
    a++
}

const morepk = document.querySelector('#morePk');
morepk.addEventListener('click', () => {
    a = 18
    b = 29

    while (a <= b) {
        console.log(fetchPokeEsp(a))
        a++
    }
})