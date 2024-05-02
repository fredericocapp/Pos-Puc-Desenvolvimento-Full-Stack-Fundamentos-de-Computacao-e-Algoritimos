import { ListaEncadeada } from "./lista-encadeada.js";

let listaEncadeada = new ListaEncadeada();
console.log(listaEncadeada.tamanho());
listaEncadeada.adicionar(5);
console.log(listaEncadeada.tamanho());
listaEncadeada.adicionar(6);
console.log(listaEncadeada.tamanho());
listaEncadeada.adicionarNaPosicao(0, 4);
console.log(listaEncadeada.toString());