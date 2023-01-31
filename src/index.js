import validator from "./validator.js";

const form = document.querySelector(".card-infos");
const botaoSubmit = document.querySelector("[data-botao]");
const dataNumero = document.querySelector("[data-numero]");
const nome = document.querySelector("[data-nome]");
const respostaValidação = document.querySelector("[data-resposta]");
// const respostaNumeroMascarado = document.querySelector(".respostaCartaoMascarado");
const redigitar = document.querySelector("[data-redigitar]");

botaoSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (nome.value === "" || (nome.value.length < 8 || dataNumero.value === "") || dataNumero.value.length < 16) {
    
    form.reportValidity();
    validator.campoEmBranco(dataNumero.value, nome.value);
  
  } else {

    if (validator.isValid(dataNumero.value)) {
      respostaValidação.textContent = `Parabéns, ${nome.value}! 
      Seu cartão de número ${validator.maskify(dataNumero.value)} é valido!`;
      botaoSubmit.remove();
      nome.value = " "
      dataNumero.value = ""

    } else {
      respostaValidação.textContent = `Desculpe, ${nome.value}!
      Seu cartão de número ${validator.maskify(dataNumero.value)} não é valido!`; 
      botaoSubmit.remove();
      nome.value=""
      dataNumero.value = ""
      redigitar.innerHTML = "<br>";
      redigitar.textContent = "Tente novamente";
    }
  }
});
