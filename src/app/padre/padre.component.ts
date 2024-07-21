import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent],
  template: `
  <app-encabezado (notificacion)="onNotify($event)"></app-encabezado>
  <div *ngIf="alertMessage" class="custom-alert">
    {{ alertMessage }}
  </div>
  `,
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  alertMessage: string | null = null;

  onNotify(mensaje: string){
    this.alertMessage = mensaje;
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000);
  }
}
