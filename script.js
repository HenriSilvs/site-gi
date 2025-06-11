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
    const inicio = new Date('2020-07-09T17:10:00');
  const agora = new Date();
  const diffMs = agora - inicio;

  // Cálculo de anos e meses
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Exibir no HTML
  document.getElementById('tempoYM').textContent = `${anos} ano(s) e ${meses} mês(es)`;

  // Cálculo de dias, horas, minutos, segundos
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById('tempo').innerHTML = `
    <span class="numero">${dias}</span> dias,
    <span class="numero">${horas}</span>h
    <span class="numero">${minutos}</span>min
    <span class="numero">${segundos}</span>s
  `;
}

setInterval(atualizarContador, 1000);
