import validator from "./validator.js";
console.log(validator);
const form = document.querySelector(".card-infos");
const botaoSubmit = document.querySelector("[data-botao]");
const dataNumero = document.querySelector("[data-numero]");
const nome = document.querySelector("[data-nome]");
const respostaValidação = document.querySelector("[data-resposta]");
const respostaNumeroMascarado = document.querySelector(
  ".respostaCartaoMascarado"
);
const redigitar = document.querySelector("[data-redigitar]");

botaoSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (nome.value === "" || (nome.value.length < 8 || dataNumero.value === "") || dataNumero.value.length < 16) {
    
    form.reportValidity();
    validator.campoEmBranco(dataNumero.value, nome.value);
  
  } else {

    if (validator.validarCartao(dataNumero.value)) {
      respostaNumeroMascarado.textContent = validator.mascaraNumeros(dataNumero.value);
      respostaValidação.textContent = `Parabéns, ${nome.value}!

      Seu cartão de número ${validator.mascaraNumeros(dataNumero.value)} é valido!`;
      botaoSubmit.remove();
      // nome.value.classList.add("invisivel") // REMOVERO INPUT
      // dataNumero.value.remove()// REMOVERO INPUT
    } else {
      respostaValidação.textContent = `Desculpe, ${nome.value}!
       
      Seu cartão de número ${validator.mascaraNumeros(dataNumero.value)} não é valido!`; 
      botaoSubmit.remove();
      // REMOVER Os INPUTs
      redigitar.innerHTML = "<br>";
      redigitar.textContent = "Tente novamente";
    }
  }
});
