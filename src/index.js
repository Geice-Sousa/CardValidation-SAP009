import validator from "./validator.js";

console.log(validator);

const form = document.querySelector(".card-infos");

const formulario = form.value;

const val = document.querySelector("[data-validade]");
const validade = val.value;

const nome = document.querySelector("[data-nome]");
const nomePreenchido = nome.value;

const respostaValidação = document.querySelector("[data-resposta]");

const redigitar = document.querySelector("[data-redigitar]");

const botaoSubmit = document.querySelector("[data-botao]");

const dataNumero = document.querySelector("[data-numero]");
const numeroCartao = dataNumero.value;

// form.reportValidity(); //pede o preenchimento do 1ºfilho, criei uma const que tinha como valores nome, validade e numeroCartao e coloquei antes, mas não funcionou

const preenchimentoDosCampos = () => {
  if (numeroCartao === "" || nomePreenchido === "") {
    console.log("Preencha todos os campos");
    return
  }
};
botaoSubmit.addEventListener("click", preenchimentoDosCampos)

//INÍCIO VALIDAÇÃO
const validarCartao = () => {
  const numeroDoCartao = document.querySelector("[data-numero]").value;

  const numero = Array.from(numeroDoCartao);

  const numeroInvertido = numero.reverse();

  const numerosParaMultiplicar = new Array(
    numeroInvertido[1],
    numeroInvertido[3],
    numeroInvertido[5],
    numeroInvertido[7],
    numeroInvertido[9],
    numeroInvertido[11],
    numeroInvertido[13],
    numeroInvertido[15]
  );

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

  const numerosImparesParaSomar = new Array(
    numeroInvertido[0],
    numeroInvertido[2],
    numeroInvertido[4],
    numeroInvertido[6],
    numeroInvertido[8],
    numeroInvertido[10],
    numeroInvertido[12],
    numeroInvertido[14]
  );

  // console.log(numerosImparesParaSomar);

  const numerosImparesSomados = numerosImparesParaSomar.reduce(function (a, b) {
    const soma = parseInt(a) + parseInt(b);
    return soma;
  });
  // console.log(numerosImparesSomados); //2ªsoma

  const resultadoFinal = somaDaMultiplicacao + numerosImparesSomados;

  if (resultadoFinal % 2 === 0) {
    respostaValidação.textContent = "Parabéns! Seu cartão é valido.";
    botaoSubmit.remove();
  } else {
    respostaValidação.textContent = "Desculpe, mas seu cartão não é valido!";
    botaoSubmit.remove();
    redigitar.innerHTML = "<br>";
    redigitar.textContent = "Tente novamente";
    //tinha como colocar aqui o .reload() para recarregar a pag? coloquei no HMTL um a no tente novamente
  }
};

botaoSubmit.addEventListener("click", validarCartao);

// replace(/\D/g, " ")substitui o 1parametro pelo 2

// maskify() = para esconder os numeros
