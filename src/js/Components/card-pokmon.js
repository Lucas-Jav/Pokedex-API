import { fetchPokeModal } from "./modal-poke.js";

async function newCard(objct) {

    const button = document.createElement('button');
    button.classList.add('poke-card');
    button.id = `pokemon-${objct.id}`;
    button.dataset.pokeId = objct.id;

    button.addEventListener('click', (ev) => {
        const Poke = ev.currentTarget.dataset.pokeId;
        fetchPokeModal(Poke);
    });

    const header = document.createElement('div');
    header.classList.add('header-poke-card', objct.types[0].type.name);

    const img = document.createElement('img');
    img.width = '130';
    img.src = `https://raw.githubusercontent.com/PokeAPI//sprites/master/sprites/pokemon/other/dream-world/${objct.id}.svg`;
    img.alt = `img-${objct.name}`
    img.loading = 'lazy';

    button.addEventListener('mouseenter', () => {
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${objct.id}.gif`;
        img.width = '120';
    });

    button.addEventListener('mouseleave', () => {
        img.width = '130';
        img.src = `https://raw.githubusercontent.com/PokeAPI//sprites/master/sprites/pokemon/other/dream-world/${objct.id}.svg`;
    });

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

    const groupType = document.createElement('div');
    groupType.classList.add('typeGp');

    objct.types.forEach(i => {
        const typeImg = document.createElement('img');
        typeImg.src = `./src/image/types/${i.type.name}.svg`;
        typeImg.alt = `icon-${i.type.name}`
        typeImg.width = '20';
        typeImg.loading = 'lazy';

        groupType.appendChild(typeImg);
    });
    
    document.querySelector('.teste-pokemons').appendChild(button);
    button.append(header, body);
    header.appendChild(img);
    body.append(descriptionPoke, groupType);
    descriptionPoke.append(span, h2);
};

export {newCard}
