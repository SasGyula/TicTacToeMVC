import { Mezo } from "../view/Mezo.js"
export class Palya{
    #lista = [" "," "," "," "," "," "," "," "," "]
    #szuloElem
    constructor(lista, szuloElem){ 
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.#kiir()
    }
    #kiir(){
        const jatekter = $(this.#szuloElem)
        this.#lista.forEach((elem, index) =>{
            let mezo = new Mezo(elem, index, jatekter)
        }
        )
    }


}