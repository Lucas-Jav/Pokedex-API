import { fetchPokeEsp } from "./Components/card-pokmon.js";

const API = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

async function fetchAPI() {
    console.time('map');
    const response = await fetch(API).then(res => res.json());
    response.results.forEach(fetchPokeEsp);
    console.timeEnd('map');
}

fetchAPI()