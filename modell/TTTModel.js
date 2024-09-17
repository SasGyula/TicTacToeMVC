export default class TTTModel{
    #LISTA = [" "," "," "," "," "," "," "," "," "]
    #lepes = 0
    #aktElem
    constructor(){
        this.#lepes=0
        this.setAktelem()
    }

    setAktelem(){
        if(this.#lepes%2===0){
            this.#aktElem="X"
        }else{
            this.#aktElem="O"
        }
    }
    getAktElem(){
        return this.#aktElem
    }

    lepteto(index){
        this.#LISTA[index] = this.#aktElem
        this.#lepes++
        this.setAktelem()
    }

    getList(){
        return this.#LISTA
    }
}