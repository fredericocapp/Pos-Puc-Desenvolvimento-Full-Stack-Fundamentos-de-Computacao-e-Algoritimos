import { Arvore } from "./arvore.js";
let arvore = new Arvore();
arvore.adicionar(1);
arvore.adicionar(2);
arvore.adicionar(3);
arvore.adicionar(4);
arvore.adicionar(5);
console.log(arvore.tamanho());
console.log(arvore.toString());