import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["heart", "diamond", "spade", "club"];
const symbols = { heart: "♥", diamond: "♦", spade: "♠", club: "♣" };
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

window.onload = function() {
  // Número aleatorio entre 1 y 4 para el palo
  const suitIndex = Math.floor(Math.random() * 4);  // 0-3
  const suit = suits[suitIndex];

  // Número aleatorio entre 0 y 12 para el valor
  const valueIndex = Math.floor(Math.random() * 13); // 0-12
  const value = values[valueIndex];

  const cardEl = document.getElementById("card");

  // Clase .card ya está en el HTML, solo añadimos la del palo
  cardEl.classList.add(suit);

  document.getElementById("val-tl").textContent  = value;
  document.getElementById("suit-tl").textContent = symbols[suit];
  document.getElementById("val-br").textContent  = value;
  document.getElementById("suit-br").textContent = symbols[suit];
  document.getElementById("center-pips").textContent = symbols[suit];
};