let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

showSlides();

const inicioRelacionamento = new Date("2020-07-09T17:10:00");
const tempoEl = document.getElementById("tempo");
const tempoYMEl = document.getElementById("tempoYM");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - inicioRelacionamento;
  
    // ==== Anos e meses ====
    let anos = agora.getFullYear() - inicioRelacionamento.getFullYear();
    let meses = agora.getMonth() - inicioRelacionamento.getMonth();
  
    if (meses < 0) {
      anos--;
      meses += 12;
}

tempoYMEl.innerHTML = `<strong>${anos}</strong> Ano(s) e <strong>${meses}</strong> Mês(es) 💖`;

  // ==== Dias, horas, minutos, segundos ====
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  tempoEl.innerHTML = `
    <span class="numero">${dias}</span> Dias,
    <span class="numero">${horas}</span>H
    <span class="numero">${minutos}</span>Min
    <span class="numero">${segundos}</span>S
  `;
}

setInterval(atualizarContador, 1000);