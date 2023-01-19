import validator from "./validator.js";

console.log(validator);

// criar constantes com os inputs - ok
// usar o .value para acessar o numero digitado - ok
// criar função que valide o numero do cartão (qtd)
// criar função que multiplique por 2 , usar o modulo % para criar a lógica e para pegar os numeros pares
// criar função que pegue o nome do cliente e coloque no span

const form = document.querySelector(".card-infos");
const formulario = form.value;

const nome = document.querySelector("[data-nome]").value;

const validade = document.querySelector("[data-validade]").value;

const botaoSubmit = document.querySelector("[data-botao]");

const validarCartao = () => {
  // colocar como paramentro do addEventListtener
  const numeroCartao = document.querySelector("[data-numero]").value;

  const numero = Array.from(numeroCartao);
  let numeroInvertido = numero.reverse();
  console.log(numeroInvertido);
  console.log(numeroInvertido[1])
    //+[3] +[5]+[7]+[9]+[11]+[13]+[15]);



    // criar um novo array com os numeros pares, multiplicar por 2 num for
    // usar o some() para somar todos?
    // USAR O REDUCE PARA SOMAR!























  // let i = 1;

  // while(i >= numeroInvertido.length) {
  //   numeroInvertido = i + 2;
  //   i + 2;
// .some()
  // }
  // console.log(i);
  // console.log([i]);
  // console.log(numeroInvertido[i])

}

botaoSubmit.addEventListener("click", validarCartao);

//como pegar a posição par do array(elas são os numeros impares 1,3,5,7,9 pq o i começa no 0)?
// somar todos o i pares e depois somar todos os impares ja x2



// ta errado pq oq eu quero é a posição de i 
// dar um console pra cada item , não é i[1]
//   if ( i[1] === i.value &&
//     i[3] === i.value &&
//     i[5] === i.value &&
//     i[7] === i.value &&
//     i[9] === i.value
//   ) {
//     i = i * 2;
//     return [i]
//   }



// criar função que pegue o nome do cliente e coloque no span
// const span = document.getElementById("respostaValidacao");
// console.log(span);
// span.creatElement("p");
// retirar o botão qndo aparecer o span com:
// remove(botaoSubmit);
// span.value.innerHTML = nome.textContent = ", seu cartão:" // executa a função de validação