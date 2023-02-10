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
    a += 0
    b += 24
    console.log(a, b)
    now({a, b})
    return a+= 24
})



function now({a,b}) {
    let c = a
    let d = b

    while (c<= d) {
        console.log(fetchPokeEsp(c))
        c++
    }
}

document.querySelector('#backtotop').addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});