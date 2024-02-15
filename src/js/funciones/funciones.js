// Referencias
const seccionContenedora = document.querySelector('#contenedor');

// Eventos
// document.addEventListener('DOMContentLoaded', mostrarPokemon);

// función invocadora de pokemón
function obtenerPokemon(id) {
  // URL de pokemón
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      mostrarPokemonHTML(data);
    });
}

function mostrarPokemon(cantidadPokemón) {
  for (let i = 1; i <= cantidadPokemón; i++) {
    obtenerPokemon(i);
  }
}

// crear html de card
function mostrarPokemonHTML(dataRecibida) {
  const {
    name,
    id,
    sprites: { front_default },
  } = dataRecibida;

  console.log(`Se ingreso a función`);

  const card = document.createElement('DIV');

  card.innerHTML = `<div class="card flex flex-col justify-center items-center gap-8 text-white font-bold max-w-xs border-solid border-2 border-sky-500-">
        <div class="card__imagen">
          <img class="card__img w-60" src="${front_default}" alt="">
        </div>
        <div class="card__contenido bg-[#DD1035] text-center p-4">
          <p class="card__numero">#${id.toString().padStart(3, '0')}</p>
          <p class="card__nombre">${name}</p>
        </div>
      </div>`;

  seccionContenedora.appendChild(card);
}

export { obtenerPokemon, mostrarPokemon };
