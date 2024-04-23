const searchBox = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const name = document.getElementById("name");
const id = document.getElementById("id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokeImg = document.getElementById("pokeImg");
const pokemonType = document.querySelector(".pokemon-type");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const details = document.querySelector(".details");
const otherDetails = document.querySelector(".other-details");
const imgBox = document.querySelector(".img-box");
const btnBox = document.getElementById("btn-box");
const pokemonTypeClass = document.querySelector(".pokemon-type");

async function pokemonSearch(item) {
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${item}`;
  try{const res = await fetch(url);
  let data = await res.json();
  console.log(data);

  details.innerHTML = `
    <p id="pokemon-name">${data.name.toUpperCase()}</p>
    <p id="pokemon-id">#${data.id}</p>
    `;
  otherDetails.innerHTML = `
    <p id="weight">Weight: ${data.weight}</p>
    <p id="height">Height: ${data.height}</p>
    `;
  imgBox.innerHTML = `
    <img src="${data.sprites.front_default}" id="sprite"
  /> 
    `;
  pokemonTypes(data.types);

  statsAddition(data.stats);
  searchBox.value = "";}

  catch(err){
    resetDisplay();
    alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
  }
}

function resetDisplay(){
    searchBox.value = "";
    details.innerHTML = "";
    otherDetails.innerHTML = "";
    imgBox.innerHTML = "";
    btnBox.innerHTML = "";
    hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
}

function cleanInput(input) {
  // Remove special characters using regex
  let cleanedName = input.replace(/[^\w\s]/gi, "");
  // Replace spaces with hyphens
  cleanedName = cleanedName.replace(/\s+/g, "-");
  return cleanedName;
}

searchBtn.addEventListener("click", () => {
  let pokeName = cleanInput(searchBox.value).toLowerCase();
  pokemonSearch(pokeName);
});

const pokemonTypes = (array) => {
  btnBox.innerHTML = "";
  let typesArray = [];

  array.forEach((item) => {
    typesArray.push(item.type.name);
  });

  console.log(typesArray);

  typesArray.forEach((type) => {
    let typeButton = document.createElement("button");
    typeButton.classList.add("pokemon-type");
    typeButton.textContent = type;

    if (type == "electric") {
      typeButton.style.background = "yellow";
    }
    if (type == "fire") {
      typeButton.style.background = "orange";
    }
    if (type == "normal") {
      typeButton.style.background = "brown";
      typeButton.style.color = "white";
    }
    if (type == "water") {
      typeButton.style.background = "blue";
    }
    if (type == "grass") {
      typeButton.style.background = "green";
      typeButton.style.color = "white";
    }
    if (type == "ice") {
      typeButton.style.background = "light-blue";
    }
    if (type == "fighting") {
      typeButton.style.background = "red";
      typeButton.style.color = "white";
    }
    if (type == "poison") {
      typeButton.style.background = "purple";
      typeButton.style.color = "white";
    }
    if (type == "ground") {
      typeButton.style.background = "yellow";
    }
    if (type == "flying") {
      typeButton.style.background = "rgb(11, 139, 244)";
    }
    if (type == "pshychic") {
      typeButton.style.background = "rgb(244, 11, 131)";
      typeButton.style.color = "white";
    }
    if (type == "bug") {
      typeButton.style.background = "rgb(75, 158, 1)";
    }
    if (type == "rock") {
      typeButton.style.background = "rgb(158, 114, 1)";
    }
    if (type == "ghost") {
      typeButton.style.background = "rgb(91, 6, 167)";
      typeButton.style.color = "white";
    }
    if (type == "dragon") {
      typeButton.style.background = "rgb(69, 52, 217)";
    }
    if (type == "dark") {
      typeButton.style.background = "orange";
      typeButton.style.color = "rgb(146, 68, 26)";
    }
    if (type == "steel") {
      typeButton.style.background = "rgb(145, 218, 239)e";
    }
    if (type == "fairy") {
      typeButton.style.background = "rgb(226, 167, 240)";
    }
    btnBox.appendChild(typeButton);
  });
};

const statsAddition = (array) => {
  hp.textContent = array[0].base_stat;
  attack.textContent = array[1].base_stat;
  defense.textContent = array[2].base_stat;
  specialAttack.textContent = array[3].base_stat;
  specialDefense.textContent = array[4].base_stat;
  speed.textContent = array[5].base_stat;
};
