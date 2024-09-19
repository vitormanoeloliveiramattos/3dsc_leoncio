/**
 * set timeout / set interval
 * funç~ao nativa que recebe argumentos
 * controla dados a partir de um intervalo
 */
const intervalo1 = setInterval(function () {
  console.log("Olá");
}, 200);
// limpar intervalo
clearInterval(intervalo1);
const timOut1 = setTimeout(function () {
  console.log("Olá");
}, 200);
//limpar intervalo
clearTimeout(timOut1);








/**estrutura de dados 
array -> estrutura de dados indexada */
const nomes = ["Ana", "Pedro", "João"];
nomes[2];// Ana nome[33] == undefined
// objetos literais-> estrutura chave/valor
const cachorro = {
  patas:4,
  cor: "preto",
  raca: "vira-lata",
  castrado: false,
};
console.log(cachorro);
console.log(cachorro.cor);

Object.keys(cachorro);
Object.values(cachorro);
//funções -> estrutura de dados que recebe argumentos