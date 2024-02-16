import {
  btnTodos,
  btnNormal,
  btnFire,
  btnWater,
  btnGrass,
  btnElectric,
  btnIce,
  btnFighting,
  btnPoison,
  btnGround,
  btnFlyng,
  btnPsychic,
  btnBug,
  btnRock,
  btnGhost,
  btnDark,
  btnDragon,
  btnSteel,
  btnFairy,
} from './referencias.js';

import { mostrarPokemon } from './funciones/funciones.js';
import { buscarTipoPokemon } from './funciones/funciones.js';

document.addEventListener('DOMContentLoaded', () => {
  mostrarPokemon(493);
});

btnTodos.addEventListener('click', () => {
  mostrarPokemon(493);
});

btnNormal.addEventListener('click', () => {
  buscarTipoPokemon(493, 'normal');
});
btnFire.addEventListener('click', () => {
  buscarTipoPokemon(493, 'fire');
});
btnWater.addEventListener('click', () => {
  buscarTipoPokemon(493, 'water');
});
btnGrass.addEventListener('click', () => {
  buscarTipoPokemon(493, 'grass');
});
btnElectric.addEventListener('click', () => {
  buscarTipoPokemon(493, 'electric');
});
btnIce.addEventListener('click', () => {
  buscarTipoPokemon(493, 'ice');
});
btnFighting.addEventListener('click', () => {
  buscarTipoPokemon(493, 'fighting');
});
btnPoison.addEventListener('click', () => {
  buscarTipoPokemon(493, 'poison');
});
btnGround.addEventListener('click', () => {
  buscarTipoPokemon(493, 'ground');
});
btnFlyng.addEventListener('click', () => {
  buscarTipoPokemon(493, 'flyng');
});
btnPsychic.addEventListener('click', () => {
  buscarTipoPokemon(493, 'psychic');
});
btnBug.addEventListener('click', () => {
  buscarTipoPokemon(493, 'bug');
});
btnRock.addEventListener('click', () => {
  buscarTipoPokemon(493, 'rock');
});
btnGhost.addEventListener('click', () => {
  buscarTipoPokemon(493, 'ghost');
});
btnDark.addEventListener('click', () => {
  buscarTipoPokemon(493, 'dark');
});
btnDragon.addEventListener('click', () => {
  buscarTipoPokemon(493, 'dragon');
});
btnSteel.addEventListener('click', () => {
  buscarTipoPokemon(493, 'steel');
});
btnFairy.addEventListener('click', () => {
  buscarTipoPokemon(493, 'fairy');
});
