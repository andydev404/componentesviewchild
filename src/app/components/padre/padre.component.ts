import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent {
  @ViewChild(HijoComponent) hijo: HijoComponent;

  enviarMensaje() {
    this.hijo.saludo('hola desde el padre');
  }
}
