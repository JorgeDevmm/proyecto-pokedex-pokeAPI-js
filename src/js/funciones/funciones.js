import { seccionContenedora } from '../referencias.js';

// Eventos
// document.addEventListener('DOMContentLoaded', mostrarPokemon);

// función invocadora de pokemón de datoa api
async function obtenerPokemon(id) {
  // URL de pokemón
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const respuesta = await fetch(url);
  const data = await respuesta.json();

  return data;

  // fetch(url)
  //   .then((respuesta) => respuesta.json())
  //   .then((data) => {
  //     console.log(data);
  //     mostrarPokemonHTML(data);
  //   });
}

// función para mostrar varios Pokémon en orden de ID
async function mostrarPokemon(cantidadPokemón) {
  limpiarHTML();
  for (let i = 1; i <= cantidadPokemón; i++) {
    // ejecuto función obtenerPokemón
    const data = await obtenerPokemon(i);
    console.log(data);
    mostrarPokemonHTML(data);
  }
}

// función para mostrar varios Pokémon en orden de ID
async function buscarTipoPokemon(cantidadPokemón, tipo) {
  limpiarHTML();
  for (let i = 1; i <= cantidadPokemón; i++) {
    // ejecuto función obtenerPokemón
    const data = await obtenerPokemon(i);

    const {
      types: {
        0: {
          type: { name: nameTipo },
        },
      },
    } = data;

    if (tipo == nameTipo) {
      mostrarPokemonHTML(data);
    }
  }
}

// crear html en el card
async function mostrarPokemonHTML(dataRecibida) {
  const {
    name,
    id,
    sprites: { front_default },
    types: {
      0: {
        type: { name: nameTipo },
      },
    },
  } = dataRecibida;

  console.log(`Se ingreso a función`);

  const card = document.createElement('DIV');

  card.innerHTML = `<div class="card flex flex-col justify-center items-center gap-8 text-white font-bold max-w-xs border-solid border-2 border-sky-500 rounded-lg">
        <div class="card__imagen bg-imagen h-40">
          <img class="card__img w-60" src="${front_default}" alt="">
        </div>
        <div class="card__contenido bg-[#DD1035] text-center p-4 w-full">
          <p class="card__numero">#${id.toString().padStart(3, '0')}</p>
          <p class="card__nombre">nombre: ${name}</p>
          <p class="card__nombre"> tipo:${nameTipo}</p>
        </div>
      </div>`;

  seccionContenedora.appendChild(card);
}

function limpiarHTML() {
  // iterar si se encuentra un elemento en resultado
  while (seccionContenedora.firstChild) {
    if (seccionContenedora.firstChild) {
      seccionContenedora.removeChild(seccionContenedora.firstChild);
    }
  }
}

export { obtenerPokemon, mostrarPokemon, buscarTipoPokemon };
