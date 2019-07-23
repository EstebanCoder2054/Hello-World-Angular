//este archivo maneja el componente del header de nuestra interfaz

//para hacerle saber a Angular que la clase HeaderComponent es un componente entonces hay que ponerle su decorador "@"
//se ha importado el decorador "Component del core de Angular"
import { Component } from '@angular/core';

@Component({
    selector: 'app-header', //de esta manera se podrá invocar desde otros archivos
    //cuando el template es muy largo entonces se suele manejar en un archivo aparte
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
}
