async function fetchPokeEsp(element, id, array) {
    const APIpoke = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(APIpoke).then(res => res.json());

    await newCard(response);
}




async function newCard(objct) {

    const button = document.createElement('button');
    button.classList.add('poke-card');
    button.id = `pokemon-${objct.id}`;

    const header = document.createElement('div');
    header.classList.add('header-poke-card', objct.types[0].type.name);

    const img = document.createElement('img');
    img.width = '200';
    img.src = objct.sprites.front_default;
    img.loading = 'lazy';

    const body = document.createElement('div');
    body.classList.add('body-poke-card');
    
    const descriptionPoke = document.createElement('div');
    descriptionPoke.classList.add('rec-card');

    const span = document.createElement('span');
        if (objct.id < 10) span.textContent = `#00${objct.id}`;
        if (objct.id >= 10) span.textContent = `#0${objct.id}`;
        if (objct.id >= 100) span.textContent = `#${objct.id}`;
        
    const h2 = document.createElement('h1');
    h2.textContent = objct.name;

    const typeImg = document.createElement('img');
    typeImg.src = `./src/image/types/${objct.types[0].type.name}.svg`;
    typeImg.width = '20';
    typeImg.loading = 'lazy';

    document.querySelector('.teste-pokemons').appendChild(button);
    button.append(header, body);
    header.appendChild(img);
    body.append(descriptionPoke, typeImg);
    descriptionPoke.append(span, h2);
}

export {fetchPokeEsp, newCard}