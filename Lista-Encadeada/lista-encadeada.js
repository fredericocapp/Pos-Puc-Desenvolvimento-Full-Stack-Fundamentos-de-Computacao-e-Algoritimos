import { Nodo } from "./nodo.js";

export class ListaEncadeada {

    #inicio = undefined;
    #fim = undefined;
    #tamanho = 0;

    constructor() {}

    adicionar(valor){
        let elemento = new Nodo(valor);
        if(this.#tamanho > 0) {
            this.#fim.proximo = elemento;
            this.#fim = elemento;
        } else {
            this.#inicio = elemento;
            this.#fim = elemento;
        }
        this.#tamanho++;
    }

    /**
     * 
     * @param {number} posicao 
     * @param {any} valor 
     */
    adicionarNaPosicao(posicao, valor){
        if(posicao > this.#tamanho || posicao < 0) {
            throw new Error("Posição Inválida");
        } 

        if(posicao == this.#tamanho) {
            this.adicionar(valor);
            return;
        }

        if(posicao == 0) {
            let elementoInicial = new Nodo(valor);
            elementoInicial.proximo = this.#inicio;
            this.#inicio = elementoInicial;
            this.#tamanho++;
            return;
        }

        let contador = 0;
        let elemento = this.#inicio;
        let elementoInserido = new Nodo(valor);
        while (contador < posicao - 1) {
            elemento = elemento.proximo;
            contador++;
        }
        if(this.#tamanho == posicao) {
            this.#fim = elementoInserido;
        }
        elementoInserido.proximo = elemento.proximo;
        elemento.proximo = elementoInserido;
        this.#tamanho++;
    }

    /**
     * 
     * @param {number} posicao 
     */
    removerPosicao(posicao) {
        if(posicao > (this.#tamanho - 1) || posicao < 0) {
            throw new Error("Posição Inválida");
        } 
        if(posicao == 0){
            this.#inicio = this.#inicio.proximo;
            this.#tamanho--;
            return;
        }
      
        let contador = 1;
        let elementoAnterior = this.#inicio;
        let elemento = elementoAnterior.proximo;
        while (contador < posicao) {
            elementoAnterior = elemento;
            elemento = elemento.proximo;
            contador++;
        }
        if((this.#tamanho - 1) == posicao) {
            this.#fim = elementoAnterior;
        }
        elementoAnterior.proximo = elemento.proximo;
        this.#tamanho--;  
    }

    tamanho() {
        return this.#tamanho;
    }

    /**
     * 
     * @returns {boolean}
     */
    estaVazia() {
        return this.#tamanho == 0;
    }

    /**
     * 
     * @returns {string}
     */
    toString(){
        if(this.#tamanho == 0) {
            return "{}";
        }
        let elemento = this.#inicio;
        let impressao = "{ " + elemento.valor;
        while(elemento.temProximo()){
            elemento = elemento.proximo;
            impressao += ", " + elemento.valor ;
        }
        impressao += " }"
        return impressao;
    }
}