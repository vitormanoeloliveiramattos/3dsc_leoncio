//array é uma estrutura de dados indexada, ou seja, cada elemento do array tem um índice.
// são iteraveis, ou seja, podem ser percorridos até o seu limite.
// loops / ciclos de repetição -> ex: for, for in, for of, foreach, while, do while
// FOR > inicialização, condição de parada, incremento(passo ou step)
const pokemonsList = [`Pikachu`, `Charmander`, `Squirtle`, `Bulbassauro`];

//console.log(pokemons[3])// 3 = bulbassauro

for (let i = 0; i < pokemonsList.length; i++) {
  console.log(pokemonsList[i]);
}

for (let pokemon in pokemonsList) {
  console.log(pokemonsList[pokemon]);
}
for (let pokemon of pokemonsList) {
  console.log(pokemon);
}
