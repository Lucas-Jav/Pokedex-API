export async function fetchPokeModal(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const API = await fetch(url).then((res) => res.json())
    console.log(API)
    return generateModal(API)
}

function generateModal(api) {
    const container = document.querySelector('#pokeid');
    container.style.display = 'flex';
    const rest = api;

    const divModal = document.createElement('div');
    divModal.classList.add('modal-poke');
    divModal.setAttribute.modalPoke = rest.id;

    const btnCloseModal = document.createElement('button');
    btnCloseModal.textContent = 'X';
    btnCloseModal.addEventListener('click', () => {
        divModal.remove()
        container.style.display = 'none';
    })

    const bodyModal = document.createElement('div');
    bodyModal.classList.add('body-modal');

    const headerModal = document.createElement('div');
    headerModal.classList.add('header-modal-interno');

    const mewImg = document.createElement('img');
    mewImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif';
    mewImg.width = 40;
    mewImg.classList.add('animationMew')
    mewImg.alt = 'mew-img';


    const pokeImg = document.createElement('img');
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${rest.id}.gif`;
    pokeImg.height = 100;
    pokeImg.alt = `img-${rest.name}`;

    const bodyInterno = document.createElement('div');
    bodyInterno.classList.add('body-modal-interno');

    const descriptionModal = document.createElement('div');
    descriptionModal.classList.add('description-modal');

    const divToDesc = document.createElement('div');

    const spanNumber = document.createElement('span');
        if (rest.id < 10) spanNumber.textContent = `#00${rest.id}`;
        if (rest.id >= 10) spanNumber.textContent = `#0${rest.id}`;
        if (rest.id >= 100) spanNumber.textContent = `#${rest.id}`;

    const h1Name = document.createElement('h1');
    h1Name.textContent = rest.name;

    rest.types.forEach(res => {
        const spanType = document.createElement('span');
        spanType.textContent = res.type.name;
        spanType.classList.add(`sp-${res.type.name}`)

        return h1Name.appendChild(spanType)
    });

    const imgType = document.createElement('img');
    imgType.src = `./src/image/types/${rest.types[0].type.name}.svg`;
    imgType.alt = `icon-${rest.types[0].type.name}`;
    imgType.width = '20';

    const divEstt = document.createElement('div');
    divEstt.classList.add('more-infos');

    const divHeight = document.createElement('div');
    divHeight.classList.add('height-poke')

    const spanHeight = document.createElement('span');
    spanHeight.textContent = `${rest.height / 10}m`;

    const pHeight = document.createElement('p');
    pHeight.textContent = 'Height'
    divHeight.append(pHeight, spanHeight)

    const divWeight = document.createElement('div');
    divWeight.classList.add('weight-poke');
    const pWeight = document.createElement('p')
    pWeight.textContent = 'Weight';
    const spanWeight = document.createElement('span');
    spanWeight.textContent = `${rest.weight / 10}kg`;
    divWeight.append(pWeight, spanWeight)

    const divAbilities = document.createElement('div');
    divAbilities.classList.add('abilities-poke');
    const pAbilities = document.createElement('p');
    pAbilities.textContent = 'Abilities';
    const spanAbilities = document.createElement('span');
    spanAbilities.textContent = rest.abilities[0].ability.name
    divAbilities.append(pAbilities, spanAbilities)
        
    const divFr = document.createElement('div');
    divFr.classList.add('fraquezas');

    const h2Fr = document.createElement('h2');
    h2Fr.textContent = 'Weaknesses';

    const divGroupF = document.createElement('div')
    divGroupF.classList.add('group-fra');

    rest.types.forEach(async (res) => {
        const url = `https://pokeapi.co/api/v2/type/${res.type.name}`;
        const api = await fetch(url).then(res => res.json())
        
        api.damage_relations.double_damage_from.forEach(type => {
            const spanNoT = document.createElement('span')
            spanNoT.textContent = type.name;
            spanNoT.classList.add(`sp-${type.name}`)

            return divGroupF.appendChild(spanNoT);
        });
    });

    container.appendChild(divModal);
    divModal.append(btnCloseModal, bodyModal);
    bodyModal.append(headerModal, bodyInterno);
    headerModal.append(mewImg ,pokeImg);
    bodyInterno.append(descriptionModal, divEstt, divFr);
    descriptionModal.append(divToDesc, imgType);
    divToDesc.append(spanNumber, h1Name);
    divEstt.append(divHeight, divWeight, divAbilities);
    divFr.append(h2Fr, divGroupF);
}

