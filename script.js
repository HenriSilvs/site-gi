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

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - inicioRelacionamento.getFullYear();
    let meses = agora.getMonth() - inicioRelacionamento.getMonth();
    let dias = agora.getDate() - inicioRelacionamento.getDate();
    let horas = agora.getHours() - inicioRelacionamento.getHours();
    let minutos = agora.getMinutes() - inicioRelacionamento.getMinutes();
    let segundos = agora.getSeconds() - inicioRelacionamento.getSeconds();

    // Segundos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    // Minutos
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    // Horas
    if (horas < 0) {
        horas += 24;
        dias--;
    }

    // Dias
    if (dias < 0) {
        // Quantos dias tinha o mês anterior?
        const ultimoDiaMesAnterior = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;
        meses--;
    }

    // Meses
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    tempoEl.innerHTML = `
        <span class="numero">${anos}</span> anos,
        <span class="numero">${meses}</span> meses,
        <span class="numero">${dias}</span> dias,
        <span class="numero">${horas}</span> horas,
        <span class="numero">${minutos}</span> minutos e
        <span class="numero">${segundos}</span> segundos ❤️
    `;
}

atualizarContador();
setInterval(atualizarContador, 1000);