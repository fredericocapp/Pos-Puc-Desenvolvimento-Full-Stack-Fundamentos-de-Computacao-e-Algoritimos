import { NodoArvore } from "./nodo-arvore.js";

export class Arvore {

    #raiz

    constructor() {
        this.#raiz = undefined;
    }

    adicionar(valor) {
        if(this.#raiz == undefined) {
            this.#raiz = new NodoArvore(undefined, valor);
            return;
        }
        this.#adicionarFilho(this.#raiz, valor);
    }

    #adicionarFilho(nodoPai, valor) {
        if (nodoPai.filhos.length < 3) {
            nodoPai.filhos.push(new NodoArvore(nodoPai, valor));
        }
        else {
            for (let i = 0; i < nodoPai.filhos.length; i++) {
                const filho = nodoPai.filhos[i];
                if(filho.filhos.length < 3) {
                    this.#adicionarFilho(filho, valor);
                    return;
                }
            }
        }
    }

    tamanho() {
        if(this.#raiz == undefined) {
            return 0;
        }
        else {
            return this.#tamanhoFilho(this.#raiz);
        }
    }

    #tamanhoFilho(nodoPai) {
        let tamanho = 1;
        if (nodoPai.filhos.length > 0) {
            nodoPai.filhos.forEach(filho => {
                tamanho += this.#tamanhoFilho(filho);
            });
        }
        return tamanho;
    }

    toString() {
        let retorno = "";
        retorno += this.#toStringArvore(this.#raiz)
        return retorno;
    }

    #toStringArvore(nodo) {
        let retorno = nodo.toString() + " ||| ";
        for (let i = 0; i < nodo.filhos.length; i++) {
            const filho = nodo.filhos[i];
            retorno += this.#toStringArvore(filho);
        }
        return retorno;
    }
}