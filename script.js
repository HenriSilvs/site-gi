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
  const diferenca = agora - inicioRelacionamento;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  tempoEl.textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizarContador, 1000);
