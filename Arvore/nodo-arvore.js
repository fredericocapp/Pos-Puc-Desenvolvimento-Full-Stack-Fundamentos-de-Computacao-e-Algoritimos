export class NodoArvore {

    #valor;
    #pai;
    #filhos;

    constructor(pai, valor) {
        this.#valor = valor;
        this.#pai = pai;
        this.#filhos = [];
    }

    toString() {
        return this.#pai == undefined ? "Nodo Raiz | Valor: " + this.#valor : "Pai: " + this.#pai.valor + " | Valor: " + this.valor ;
    }

    get valor() {
        return this.#valor;
    }

    get filhos(){
        return this.#filhos;
    }
}