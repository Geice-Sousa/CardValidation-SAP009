const validator = {
  campoEmBranco: (numeroCartao, nomePreenchido) => {
    // const form = document.querySelector(".card-infos"); form.reportValidity();
  // DETALHE QUE QUERO COLOCAR NO INDEX MAS NÃO SEI COMO o input fica marcado

    if (numeroCartao.length < 16 || numeroCartao === "") {
      alert("Por favor, preencha corretamente a numeração do seu cartão!");
    } else if (nomePreenchido.length <= 8 || nomePreenchido === "") {
      alert("Por favor, preencha nome e sobrenome como está no cartão!");
    }
    //FUNCIONOU! o reportValidity faz o blur, de deixar o input não preenchido selecionado, o alert deixa continuar a preencher sem precisar digitar tudo novamente
  },

  validarCartao: (numeroDoCartao) => {
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
    ); // console.log(numerosImparesParaSomar);

    const numerosImparesSomados = numerosImparesParaSomar.reduce(function (a, b) {
      const soma = parseInt(a) + parseInt(b); 12
      return soma;
    }); // console.log(numerosImparesSomados); //2ªsoma

    const resultadoFinal = somaDaMultiplicacao + numerosImparesSomados;
    return resultadoFinal % 10 === 0;
  }, // vai retornar true or false

  mascaraNumeros: (numeros) => {
    const ultimosDigitos = numeros.slice(-4);
    const simboloMascara = "#";
    const numeroMascarado = simboloMascara.repeat(12) + ultimosDigitos;
    // ou "############" + ultimosDigitos ou ultimosDigitos.padStart(16, "#")
    return numeroMascarado;
  },
};

export default validator;