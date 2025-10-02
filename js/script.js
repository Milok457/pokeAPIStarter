const data = await fetch('../data/data.json').then(response => response.json());
console.log(data);
/*
for(let i = 0; i < data.length; i++) {
    let newArticle = document.createElement('article');
    newArticle.innerHTML = `
    <figure>
        <figure>
          <picture>
            <img src="${data[i].image}" alt="Image ${data[i].name}" />
          </picture>
          <figcaption>
            <span class="types"> <img class="type-image" src="${data[i].apiTypes[0].image}" alt="Type ${data[i].apiTypes[0].name}" /> ${data[i].apiTypes[0].name}</span>
            <h2>${data[i].name}</h2>
            <ol>
                <li>Points de vie : ${data[i].stats.HP}</li>
                <li>Attaque : ${data[i].stats.attack}</li>
                <li>Défense : ${data[i].stats.defense}</li>
                <li>Attaque spécial : ${data[i].stats.special_attack}</li>
                <li>Défense spécial : ${data[i].stats.special_defense}</li>
                <li>Vitesse : ${data[i].stats.speed}</li>
            </ol>
          </figcaption>
        </figure>`;
    document.querySelector('main').appendChild(newArticle);
    switch(data[i].apiTypes[0].name) {
        case "Plante":
            newArticle.style.backgroundColor = "#78C850";
            newArticle.style.color = "#519c2bff";
            break;
        case "Feu":
            newArticle.style.backgroundColor = "#F08030";
            newArticle.style.color = "#b66227ff";
            break;
        case "Eau":
            newArticle.style.backgroundColor = "#6890F0";
            newArticle.style.color = "#3964c9ff";
            break;
        case "Insecte":
            newArticle.style.backgroundColor = "#A8B820";
            newArticle.style.color = "#899618ff";
            break;
        case "Normal":
            newArticle.style.backgroundColor = "#A8A878";
            newArticle.style.color = "#868667ff";
            break;
        case "Poison":
            newArticle.style.backgroundColor = "#A040A0";
            newArticle.style.color = "#613361ff";
            break;
        case "Electrique":
            newArticle.style.backgroundColor = "#F8D030";
            newArticle.style.color = "#d6b11eff";
            break;
        case "Sol":
            newArticle.style.backgroundColor = "#E0C068";
            newArticle.style.color = "#ac8a2dff";
            break;
        case "Fée":
            newArticle.style.backgroundColor = "#EE99AC";
            newArticle.style.color = "#da7a8fff";
            break;
        case "Combat":
            newArticle.style.backgroundColor = "#C03028";
            newArticle.style.color = "#92221cff";
            break;
        case "Psyc":
            newArticle.style.backgroundColor = "#F85888";
            newArticle.style.color = "#F85888";
            break;
        case "Roche":
            newArticle.style.backgroundColor = "#B8A038";
            newArticle.style.color = "#948029ff"; 
            break;
        case "Spectre":
            newArticle.style.backgroundColor = "#705898";
            newArticle.style.color = "#5c4383ff";
            break;
        case "Glace":
            newArticle.style.backgroundColor = "#98D8D8";
            newArticle.style.color = "#66afafff";
            break;
        case "Dragon":
            newArticle.style.backgroundColor = "#7038F8";
            newArticle.style.color = "#5626c5ff";
            break;
        case "Ténèbres":
            newArticle.style.backgroundColor = "#705848";
            newArticle.style.color = "#4b3b31ff";
            break;
        case "Acier":
            newArticle.style.backgroundColor = "#B8B8D0";
            newArticle.style.color = "#9494a7ff";
            break;
        case "Vol":
            newArticle.style.backgroundColor = "#A890F0";
            newArticle.style.color = "#7763b6ff";
            break;
        default:
            newArticle.style.backgroundColor = "#FFFFFF";
    }
}
    */
data.forEach(pokemon => {
    let newArticle = document.createElement('article');
    let alltypes = "";
    for(let j = 0; j < pokemon.apiTypes.length; j++) {
        alltypes += `<img class="type-image " src="${pokemon.apiTypes[j].image}" alt="Type ${pokemon.apiTypes[j].name}" /> ${pokemon.apiTypes[j].name} `;
    }
    newArticle.innerHTML = `
        <figure>
          <picture>
            <img src="${pokemon.image}" alt="Image ${pokemon.name}" />
          </picture>
          <figcaption>
            <span class="types"> ${alltypes}</span>
            <h2>${pokemon.name}</h2>
            <ol>
                <li>Points de vie : ${pokemon.stats.HP}</li>
                <li>Attaque : ${pokemon.stats.attack}</li>
                <li>Défense : ${pokemon.stats.defense}</li>
                <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                <li>Défense spécial : ${pokemon.stats.special_defense}</li>
                <li>Vitesse : ${pokemon.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>`;
    document.querySelector('main').appendChild(newArticle);
    switch(pokemon.apiTypes[0].name) {
        case "Plante":
            newArticle.style.backgroundColor = "#78C850";
            newArticle.style.color = "#519c2bff";
            break;
        case "Feu":
            newArticle.style.backgroundColor = "#F08030";
            newArticle.style.color = "#b66227ff";
            break;
        case "Eau":
            newArticle.style.backgroundColor = "#6890F0";
            newArticle.style.color = "#3964c9ff";
            break;
        case "Insecte":
            newArticle.style.backgroundColor = "#A8B820";
            newArticle.style.color = "#899618ff";
            break;
        case "Normal":
            newArticle.style.backgroundColor = "#A8A878";
            newArticle.style.color = "#868667ff";
            break;
        case "Poison":
            newArticle.style.backgroundColor = "#A040A0";
            newArticle.style.color = "#613361ff";
            break;
        case "Electrique":
            newArticle.style.backgroundColor = "#F8D030";
            newArticle.style.color = "#d6b11eff";
            break;
        case "Sol":
            newArticle.style.backgroundColor = "#E0C068";
            newArticle.style.color = "#ac8a2dff";
            break;
        case "Fée":
            newArticle.style.backgroundColor = "#EE99AC";
            newArticle.style.color = "#da7a8fff";
            break;
        case "Combat":
            newArticle.style.backgroundColor = "#C03028";
            newArticle.style.color = "#92221cff";
            break;
        case "Psyc":
            newArticle.style.backgroundColor = "#F85888";
            newArticle.style.color = "#F85888";
            break;
        case "Roche":
            newArticle.style.backgroundColor = "#B8A038";
            newArticle.style.color = "#948029ff"; 
            break;
        case "Spectre":
            newArticle.style.backgroundColor = "#705898";
            newArticle.style.color = "#5c4383ff";
            break;
        case "Glace":
            newArticle.style.backgroundColor = "#98D8D8";
            newArticle.style.color = "#66afafff";
            break;
        case "Dragon":
            newArticle.style.backgroundColor = "#7038F8";
            newArticle.style.color = "#5626c5ff";
            break;
        case "Ténèbres":
            newArticle.style.backgroundColor = "#705848";
            newArticle.style.color = "#4b3b31ff";
            break;
        case "Acier":
            newArticle.style.backgroundColor = "#B8B8D0";
            newArticle.style.color = "#9494a7ff";
            break;
        case "Vol":
            newArticle.style.backgroundColor = "#A890F0";
            newArticle.style.color = "#7763b6ff";
            break;
        default:
            newArticle.style.backgroundColor = "#FFFFFF";
    }
});