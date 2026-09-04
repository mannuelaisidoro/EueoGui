// DATA DA HISTÓRIA
// 23 de novembro de 2025
const inicio = new Date("2025-11-23T00:00:00-03:00");

function atualizarContador() {
  const agora = new Date();
  let diferenca = Math.max(0, agora - inicio);

  const dia = 1000 * 60 * 60 * 24;
  const hora = 1000 * 60 * 60;
  const minuto = 1000 * 60;

  const dias = Math.floor(diferenca / dia);
  diferenca %= dia;

  const horas = Math.floor(diferenca / hora);
  diferenca %= hora;

  const minutos = Math.floor(diferenca / minuto);
  diferenca %= minuto;

  const segundos = Math.floor(diferenca / 1000);

  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutos).padStart(2, "0");
  document.getElementById("seconds").textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);


// PLAYER
const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");

playButton.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      playButton.textContent = "Ⅱ";
    } else {
      audio.pause();
      playButton.textContent = "▶";
    }
  } catch {
    alert("coloque o arquivo alianca.mp3 na pasta do site para ativar a música ♡");
  }
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const porcentagem = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = porcentagem + "%";

  const minutos = Math.floor(audio.currentTime / 60);
  const segundos = Math.floor(audio.currentTime % 60);

  currentTime.textContent =
    String(minutos).padStart(2, "0") + ":" +
    String(segundos).padStart(2, "0");
});
