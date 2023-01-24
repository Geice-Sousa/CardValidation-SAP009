import validator from "./validator.js";

console.log(validator);

const form = document.querySelector(".card-infos");

// const formulario = form.value;
// const val = document.querySelector("[data-validade]");
// const validade = val.value;
// const numeroCartao = dataNumero.value;

const nome = document.querySelector("[data-nome]");

const respostaValidação = document.querySelector("[data-resposta]");

const botaoSubmit = document.querySelector("[data-botao]");

const dataNumero = document.querySelector("[data-numero]");

const campoEmBranco = ()=>{
  form.reportValidity();

  // APARCE AO CLICAR EM ENVIAR , QUERIA QUE SÓ APARECESSE O CAMPO NOME ESTIVER EM BRANCO const nomePreenchido = nome.value;
  // if(nomePreenchido.length <= 8 || nomePreenchido === ""){ console.log(
  //     // respostaValidação.innerHTML=
  //     "Por favor, preencha nome e sobrenome como está no cartão! <br> <br>")  }
}
//INÍCIO VALIDAÇÃO
const validarCartao = () => {

  const numeroDoCartao = document.querySelector("[data-numero]").value;

  const numero = Array.from(numeroDoCartao);

  const numeroInvertido = numero.reverse();

  const numerosParaMultiplicar = new Array(numeroInvertido[1], numeroInvertido[3],
    numeroInvertido[5], numeroInvertido[7], numeroInvertido[9], numeroInvertido[11],
    numeroInvertido[13], numeroInvertido[15]);

  const numerosMultiplicados = numerosParaMultiplicar.map((numero) => {
    const multiplicados = numero * 2;

    if (multiplicados >= 10) {
      const resultadoDaSomaDosMultiplicados =
        parseInt(multiplicados.toString()[0]) +
        parseInt(multiplicados.toString()[1]);

      return resultadoDaSomaDosMultiplicados;
    }
    return multiplicados;
  }); // console.log(numerosMultiplicados); //okay, aqui é a 1ªVAR eu poderia usar o concat para finalizar o calculo

  const somaDaMultiplicacao = numerosMultiplicados.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  }, 0); //no lugar de concatenar os arrays fiz a 1ªsoma

  const numerosImparesParaSomar = new Array(numeroInvertido[0], numeroInvertido[2],
    numeroInvertido[4], numeroInvertido[6], numeroInvertido[8], numeroInvertido[10],
    numeroInvertido[12], numeroInvertido[14]); // console.log(numerosImparesParaSomar);

  const numerosImparesSomados = numerosImparesParaSomar.reduce(function (a, b) {
    const soma = parseInt(a) + parseInt(b);
    return soma;
  }); // console.log(numerosImparesSomados); //2ªsoma  

  const resultadoFinal = somaDaMultiplicacao + numerosImparesSomados;

  const redigitar = document.querySelector("[data-redigitar]");

  if (resultadoFinal % 2 === 0){
    respostaValidação.textContent = "Parabéns! Seu cartão é valido.";
    botaoSubmit.remove();
  } 
  else{
    respostaValidação.textContent = "Desculpe, mas seu cartão não é valido!";
    botaoSubmit.remove();
    redigitar.innerHTML = "<br>";
    redigitar.textContent = "Tente novamente";
  }
};

// botaoSubmit.addEventListener("click", campoEmBranco); 
// O QUE EU QUERO: SE TIVER CAMPO EM BRANCO, EXECUTA ESSA FUNÇÃO, SE NÃO TIVER EXECUTA A DE BAIXO
botaoSubmit.addEventListener("click", validarCartao);
  

// replace(/\D/g, " ")substitui o 1parametro pelo 2

// maskify() = para esconder os numeros
