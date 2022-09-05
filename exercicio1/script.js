//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

const fruta1 = {nome: "Abacaxi", preco:5.00, disponibilidade: true}
const fruta2 = {nome: "morango", preco:7.50, disponibilidade: false}
const fruta3 = {nome:"banana", preco:3.00, disponibilidade: true}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1,fruta2,fruta3)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)