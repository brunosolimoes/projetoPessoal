import type { HabilisAndMages } from "./HabilitsAndMages";
import type { Atributos } from "./Atributos";


export type CharacterPlayerType = {
     
    name:string
    race:string
    class:string
    level: number
    atributos:Atributos
    lifeTotal:number
    life:number
    manaTotal:number
    mana:number

    actions: HabilisAndMages[]

};