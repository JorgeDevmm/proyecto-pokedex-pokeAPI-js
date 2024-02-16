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

// función para mostrar varios Pokémon en orden de ID
async function buscarNombre(cantidadPokemon, nombre) {
  limpiarHTML();
  for (let i = 1; i <= cantidadPokemon; i++) {
    // ejecuto función obtenerPokemón
    const data = await obtenerPokemon(i);

    const { name } = data;

    if (nombre.toLowerCase() == name) {
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

  const card = document.createElement('DIV');
  card.classList.add(
    'card',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'text-white',
    'font-bold',
    'max-w-xs',
    'border-double',
    'border-2',
    'border-[#435056]',
    'rounded-lg',
    'relative'
  );

  // Crear la pokeball
  const pokeball = document.createElement('img');
  pokeball.src = `https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/external-pokeball-video-games-those-icons-lineal-color-those-icons`;
  pokeball.classList.add('absolute', 'top-1', 'left-1', 'z-10',"w-8");

  // Añadir la pokeball al contenedor principal
  card.appendChild(pokeball);

  const cardImagen = document.createElement('DIV');
  cardImagen.classList.add(
    'card__imagen',
    'bg-imagen',
    'h-60',
    'bg-cover',
    'bg-center',
    'bg-sky-300',
    'rounded-t-lg'
  );

  card.appendChild(cardImagen);

  const cardImg = document.createElement('img');
  cardImg.classList.add('card__img', 'w-60');
  cardImg.src = front_default;

  cardImagen.appendChild(cardImg);

  const cardContenido = document.createElement('DIV');
  cardContenido.classList.add(
    'card__contenido',
    'bg-[#DD1035]',
    'text-center',
    'p-8',
    'w-full',
    'border-double',
    'border-t-2',
    'border-[#435056]'
  );

  card.appendChild(cardContenido);

  const cardNumero = document.createElement('p');
  cardNumero.classList.add('text-3xl');
  cardNumero.textContent = `#${id.toString().padStart(3, '0')}`;

  const cardNombre = document.createElement('p');
  cardNombre.classList.add('text-sm');
  cardNombre.innerHTML = `<span class="text-[#FDE629]">Nombre: </span>  ${name.toUpperCase()}`;

  const cardNombreTipo = document.createElement('p');
  cardNombreTipo.innerHTML = `<span class="text-[#FDE629]">Tipo: </span>  ${nameTipo.toUpperCase()}`;

  cardContenido.appendChild(cardNumero);
  cardContenido.appendChild(cardNombre);
  cardContenido.appendChild(cardNombreTipo);

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

export { obtenerPokemon, mostrarPokemon, buscarTipoPokemon, buscarNombre };
