import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["heart", "diamond", "spade", "club"];
const symbols = { heart: "♥", diamond: "♦", spade: "♠", club: "♣" };
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

function generateCard() {
  const suit  = suits[Math.floor(Math.random() * 4)];   // 0-3
  const value = values[Math.floor(Math.random() * 13)]; // 0-12

  const cardEl = document.getElementById("card");

  cardEl.classList.remove("heart", "diamond", "spade", "club");
  cardEl.classList.add(suit);

  document.getElementById("val-tl").textContent  = value;
  document.getElementById("suit-tl").textContent = symbols[suit];
  document.getElementById("val-br").textContent  = value;
  document.getElementById("suit-br").textContent = symbols[suit];
  document.getElementById("center-pips").textContent = symbols[suit];
}

let timeLeft = 10;

function resetCountdown() {
  timeLeft = 10;
  document.getElementById("countdown").textContent = timeLeft;
}

function tick() {
  timeLeft--;
  document.getElementById("countdown").textContent = timeLeft;
  if (timeLeft <= 0) {
    generateCard();
    resetCountdown();
  }
}

window.onload = function() {
  generateCard();

  document.getElementById("btn-new").addEventListener("click", () => {
    generateCard();
    resetCountdown();
  });

  setInterval(tick, 1000);

  document.getElementById("btn-resize").addEventListener("click", () => {
    const w = parseInt(document.getElementById("input-width").value)  || 240;
    const h = parseInt(document.getElementById("input-height").value) || 340;
    const cardEl = document.getElementById("card");
    cardEl.style.width  = w + "px";
    cardEl.style.height = h + "px";
  });
};