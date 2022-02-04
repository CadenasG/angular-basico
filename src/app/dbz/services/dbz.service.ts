import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(){
        return [...this._personajes] 
        /*sirve para enviar una copia y no perjudicar 
        el array el de _personaje Buenas Practicas*/
    }

    constructor(){
        console.log('servicio inicializado');
    }

    public agregarPersonaje(pj: Personaje){
        this._personajes.push(pj)
    }
}