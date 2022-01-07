//Estrutura objeto literal
//let nomeVariavel = {
    //nomePropriedade1: valor1,
    //nomePropriedade2: valor2,
//}
//let {nomePropriedade1, nomePropriedade2} = nomeVariavel;
//console.log(nomePropriedade1);

let pessoa = {
    nome: "Fabio",
    idade: 39,
    altura: 1.70
}
const {nome, idade, altura} = pessoa;
console.log(nome);

//estrutura array
//let nomeVariavel = [valor1, valor2, valor3,...];
//const [valor1, valor2, valor3,...] = nomeVariavel;
//console.log(valor1);

let listaCompras = ["pao", "leite", "carne"];
const [pao, leite, carne] = listaCompras;
console.log(carne);
