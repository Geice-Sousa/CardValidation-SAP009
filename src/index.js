import validator from './validator.js';

console.log(validator);

// criar constantes com os inputs
// usar o .value para acessar o numero digitado


const form = document.getElementsByClassName("card-infos");
const formulario = form.value;
console.log(formulario);

const numeroCartao = document.querySelector(".card-numero").value;
console.log(numeroCartao);

const validade = document.querySelector(".card-validade").value;
console.log(validade);

