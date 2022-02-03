import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: ` 
        <h1>{{titulo}}</h1>

        <button (click)="sumar(+5)">+5</button>
        <span>{{numero}}</span>
        <button (click)="sumar(-5)">-5</button>
    `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;

    sumar(num: number){
        this.numero += num;
    }
}