//este archivo el componente del body en la interfaz

import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    
    mostrar = true;

    frase: any = {
        mensaje: '1. Fomentar el espíritu de esfuerzo',
        autor: 'Dojo Kun'
    };

    //el ngFor trabaja en base a arreglos, quiere decir que éste siempre espera un arreglo para barrerlo
    personajes: string[] = ['Kata', 'Kihon', 'Kumite'];
}