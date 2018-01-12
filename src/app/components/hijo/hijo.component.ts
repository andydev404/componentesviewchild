import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {
  mensaje: string = 'Este es el hijo';
  saludo(value) {
    this.mensaje = value;
  }
}
