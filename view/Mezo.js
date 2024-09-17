export class Mezo {
    #jel
    #index
    #szuloElem
    #gombElem
    constructor(jel, id, szuloelem){
        this.#jel = jel
        this.#index = id
        this.#szuloElem = szuloelem
        this.#megjelenit()
        this.#gombElem = this.#szuloElem.children("div:last-child")
        if(this.#jel === " "){
            this.#esemeny()
        }
        //csak üres mezőre hivjuk meg a saját eseményt
    }
    #megjelenit(){
        let text = `<div><p class="palya"> ${this.#jel}</p></div>`
        this.#szuloElem.append(text)
    }
    #esemeny(){
        this.#gombElem.on("click", ()=>{
            console.log(this.#index)
            const e = new CustomEvent("katt", {detail:this.#index})
            window.dispatchEvent(e)
        })
      
    }
}