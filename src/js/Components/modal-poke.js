export async function fetchPokeModal(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const API = await fetch(url).then((res) => res.json());
    return generateModal(API);
}

export function generateModal(api) {
    const container = document.querySelector('#pokeid');
    container.style.display = 'flex';
    const rest = api;

    const divModal = document.createElement('div');
    divModal.classList.add('modal-poke', 'fadein');
    divModal.setAttribute.modalPoke = rest.id;

    const btnCloseModal = document.createElement('button');
    btnCloseModal.textContent = 'X';
    btnCloseModal.addEventListener('click', () => {
        divModal.remove();
        container.style.display = 'none';
        document.querySelector('.search__input').disabled = false;
    });

    const bodyModal = document.createElement('div');
    bodyModal.classList.add('body-modal');

    const headerModal = document.createElement('div');
    headerModal.classList.add('header-modal-interno');

    const mewImg = document.createElement('img');
    if (rest.id === 151) {
        mewImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/251.gif';
        mewImg.width = 20;
    } else {
        mewImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif';
        mewImg.width = 40;
    }
    mewImg.classList.add('animationMew');
    mewImg.alt = 'mew-img';

    const pokeImg = document.createElement('img');
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${rest.id}.gif`;
    
    if (rest.height <= 5) pokeImg.height = rest.height * 13;
    else if (rest.height <= 10) pokeImg.height = rest.height * 7;
    else if (rest.height < 15) pokeImg.height = rest.height * 6.8;
    else if (rest.height < 20) pokeImg.height = rest.height * 5.5;
    else if (rest.height <= 25) pokeImg.height = rest.height * 4.5;
    else if (rest.height <= 40) pokeImg.height = rest.height * 3.5;
    else if (rest.height <= 50) pokeImg.height = rest.height * 3;
    else if (rest.height <= 60) pokeImg.height = rest.height * 2.8;
    else if (rest.height < 110) pokeImg.height = rest.height * 1.8;
    else if (rest.height >= 110) pokeImg.height = rest.height * 1.2;
    
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
        spanType.classList.add(`sp-${res.type.name}`);

        return h1Name.appendChild(spanType);
    });

    const groupType = document.createElement('div');
    groupType.classList.add('typeGp');

    rest.types.forEach((i) => {
        const imgType = document.createElement('img');
        imgType.src = `./src/image/types/${i.type.name}.svg`;
        imgType.alt = `icon-${i.type.name}`;
        imgType.width = '20';

        return groupType.appendChild(imgType);
    })


    const divEstt = document.createElement('div');
    divEstt.classList.add('more-infos');

    const divHeight = document.createElement('div');
    divHeight.classList.add('height-poke')

    const spanHeight = document.createElement('span');
    spanHeight.textContent = `${rest.height / 10}m`;

    const pHeight = document.createElement('p');
    pHeight.textContent = 'Height';
    divHeight.append(pHeight, spanHeight);

    const divWeight = document.createElement('div');
    divWeight.classList.add('weight-poke');
    const pWeight = document.createElement('p');
    pWeight.textContent = 'Weight';
    const spanWeight = document.createElement('span');
    spanWeight.textContent = `${rest.weight / 10}kg`;
    divWeight.append(pWeight, spanWeight);

    const divAbilities = document.createElement('div');
    divAbilities.classList.add('abilities-poke');
    const pAbilities = document.createElement('p');
    pAbilities.textContent = 'Abilities';
    const spanAbilities = document.createElement('span');
    spanAbilities.textContent = rest.abilities[0].ability.name;
    divAbilities.append(pAbilities, spanAbilities);
        
    const divFr = document.createElement('div');
    divFr.classList.add('fraquezas');

    const h2Fr = document.createElement('h2');
    h2Fr.textContent = 'Weaknesses';

    const divGroupF = document.createElement('div');
    divGroupF.classList.add('group-fra');

    const typeArr = [];

    rest.types.forEach(async (res) => {
        const url = `https://pokeapi.co/api/v2/type/${res.type.name}`;
        const api = await fetch(url).then(res => res.json());
        
        api.damage_relations.double_damage_from.forEach(type => {
            
            if (typeArr.includes(type.name)){
                return typeArr;
            } else {
                typeArr.push(type.name);
                const spanNoT = document.createElement('span');
                spanNoT.textContent = type.name;
                spanNoT.classList.add(`sp-${type.name}`);

                return divGroupF.appendChild(spanNoT);
            };
        });
    });

    const divStats = document.createElement('div');
    divStats.classList.add('status-info');

    const h2Stats = document.createElement('h2');
    h2Stats.textContent = 'Stats';
    
    divStats.append(h2Stats);

    rest.stats.forEach( i => {
        const divM = document.createElement('div');
        divM.classList.add(i.stat.name);

        const pType = document.createElement('p');
        pType.textContent = i.stat.name;

        const progressBar = document.createElement('progress');
        progressBar.classList.toggle(`sc-${rest.types[0].type.name}`);
        progressBar.max = '100';
        progressBar.value = i.base_stat;
        progressBar.textContent = i.base_stat;

        divM.append(pType, progressBar);
        divStats.appendChild(divM);
    });

    const divButtonsPreview = document.createElement('div');
    divButtonsPreview.classList.add('buttons');

    const btnBack = document.createElement('button');
    btnBack.dataset.pokeId = rest.id;
    btnBack.textContent = 'Back';

    const btnNext = document.createElement('button');
    btnNext.dataset.pokeId = rest.id;
    btnNext.textContent = 'Next';

    btnBack.addEventListener('click', (e) => {
        let numberPk = parseFloat(e.currentTarget.dataset.pokeId )- 1;
        if (numberPk >= 1) {
            divModal.classList.remove('fadein')
            divModal.classList.add('easeOut');
            setTimeout(() => {
                divModal.remove()
                fetchPokeModal(numberPk);
            }, 300);
        };
    });

    btnNext.addEventListener('click', (e) => {
        let numberPk = parseFloat(e.currentTarget.dataset.pokeId )+ 1;
        divModal.classList.remove('fadein', 'easeOut');
        divModal.classList.add('easeOut');
        setTimeout(() => {
            divModal.remove();
            fetchPokeModal(numberPk);
        }, 300);
    });

    
    container.appendChild(divModal);
    divModal.append(btnCloseModal, bodyModal, divButtonsPreview);
    bodyModal.append(headerModal, bodyInterno);
    headerModal.append(mewImg ,pokeImg);
    bodyInterno.append(descriptionModal, divEstt, divFr, divStats);
    descriptionModal.append(divToDesc, groupType);
    divToDesc.append(spanNumber, h1Name);
    divEstt.append(divHeight, divWeight, divAbilities);
    divFr.append(h2Fr, divGroupF);
    divButtonsPreview.append(btnBack, btnNext);
};


