import { fetchPokeEsp } from "../index.js";

export function generateBtn() {
    const select = document.querySelector('select');

    select.addEventListener('change', async (e) => {
        const type = select.value;

        if (select.value === 'none') {
            const buttons = document.querySelectorAll('.poke-card');
            buttons.forEach(rej => rej.remove());
            
            let a = 1;
            let b = 12;

            while (a <= b) {
                await fetchPokeEsp(a);
                a++
            };
        } else {
            const classe = document.querySelector(`option[value="${type}"]`).classList[0];
            select.classList.remove(select.classList[0])
            select.classList.add(classe);
            const url = `https://pokeapi.co/api/v2/type/${type}/`;
            const API = await fetch(url).then((res) => res.json());
            
            API.pokemon.forEach((rest) => {
                fetchPokeEsp(rest.pokemon.name);
            });
    
            const buttons = document.querySelectorAll('.poke-card');
            buttons.forEach(rej => rej.remove());
        };
    });
};

