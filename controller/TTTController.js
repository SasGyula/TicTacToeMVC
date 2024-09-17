import TTTModel from "../modell/TTTModel.js";
import { Palya } from "../view/Palya.js";

export default class TTTController{

    constructor(){
        this.taroloElem = $("#jatek")
        this.TTTModel = new TTTModel()
        new Palya(this.TTTModel.getList(), this.taroloElem)
        this.#esemenykezelo()
    }
    #esemenykezelo(){
        $(window).on("katt", (event) =>{
            let id = event.detail
            this.TTTModel.lepteto(id)
            new Palya(this.TTTModel.getList(), this.taroloElem)
        })
    }
}