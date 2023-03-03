const form = document.getElementById("form");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (Number(campoB.value) > Number(campoA.value)) {
    mensagem.textContent = "Formulário válido!";
    mensagem.style.color = "green";
    mensagem.style.fontWeight = "bold";
    mensagem.style.fontSize = "2rem";
    mensagem.style.textAlign = "center";
    mensagem.style.marginTop = "1rem";
  } else {
    mensagem.textContent = "Formulário inválido!";
    mensagem.style.color = "red";
    mensagem.style.fontWeight = "bold";
    mensagem.style.fontSize = "2rem";
    mensagem.style.textAlign = "center";
    mensagem.style.marginTop = "1rem";
  }
});
