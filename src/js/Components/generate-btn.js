import { fetchPokeEsp } from "../index.js";

export function generateBtn(api) {
    let number = 1;

    api.results.forEach(item => {

        if (item.name != 'unknown' && item.name != 'shadow') {
            const button = document.createElement('button');
            button.classList.add(`sp-${item.name}`)
            button.textContent = item.name;
            button.dataset.type = number;


            button.addEventListener('click', async (e) => {
                const type = e.currentTarget.dataset.type;
                const url = `https://pokeapi.co/api/v2/type/${type}/`
                const API = await fetch(url).then((res) => res.json())
                
                API.pokemon.forEach((rest) => {
                    fetchPokeEsp(rest.pokemon.name);
                });

                const buttons = document.querySelectorAll('.poke-card')
                buttons.forEach(rej => rej.remove());
            });

            document.querySelector('.hero-section-2').appendChild(button);

            number++
        };
    });
}

