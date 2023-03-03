const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formEValido = false;

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Depósito de R$ <b>${valorDeposito.value}</b> realizado com sucesso para <b>${nomeBeneficiario.value}</b> na conta <b>${numeroContaBeneficiario.value}</b>`;

  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(`.sucesso`);
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDeposito.value = "";
  } else {
    nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".erro").style.display = "block";
  }
});

nomeBeneficiario.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formEValido = validaNome(e.target.value);

  if (!formEValido) {
    nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error").style.display = "block";
  } else {
    nomeBeneficiario.style = "";
    document.querySelector(".error").style.display = "none";
  }
});
