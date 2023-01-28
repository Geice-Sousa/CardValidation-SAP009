import validator from "./validator.js";
console.log(validator);

const form = document.querySelector(".card-infos");
const botaoSubmit = document.querySelector("[data-botao]");
const dataNumero = document.querySelector("[data-numero]");
const nome = document.querySelector("[data-nome]");
const respostaValidação = document.querySelector("[data-resposta]");
const respostaNumeroMascarado = document.querySelector(".respostaCartaoMascarado");
const redigitar = document.querySelector("[data-redigitar]");

botaoSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (nome.value === "" || dataNumero.value === "" 
      || nome.value.length <= 8 || dataNumero.value.length < 16) {
    validator.campoEmBranco(nome.value, dataNumero.value);
  } else {
    validator.mascaraNumeros(dataNumero.value);
    validator.validarCartao(dataNumero.value);
    if (validator.validarCartao(dataNumero.value) === true) {
      respostaNumeroMascarado.textContent = validator.mascaraNumeros(dataNumero.value);
      respostaValidação.textContent = "Parabéns! Seu cartão é valido.";
      // respostaValidação.textContent = `Parabéns! Seu cartão de número ${validator.mascaraNumeros(dataNumero.value)} é valido!`;
      botaoSubmit.remove();
      // REMOVERO INPUT
    } else {
      respostaValidação.textContent = "Desculpe, mas seu cartão não é valido!";
      botaoSubmit.remove();
      redigitar.innerHTML = "<br>";
      redigitar.textContent = "Tente novamente";
    }
  }
});
