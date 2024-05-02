export class Nodo {

    #valor;
    #proximo;
  
    constructor(valor){
        this.#valor = valor;
        this.#proximo = undefined;
    }

    /**
     * 
     * @returns {boolean}
     */
    temProximo() {
        return this.#proximo != undefined;
    }
   
    /**
     * @param {Nodo} proximo
    */
   set  proximo(proximo){
       this.#proximo = proximo;
    }
    
    /**
     * @returns {Nodo}
    */
   get proximo() {
       return this.#proximo;
    }
    
    /**
     * @returns {any}
     */
    get valor() {
        return this.#valor;
    }
}