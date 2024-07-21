import { CommonModule } from '@angular/common';
import { Component, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="header-container">
    <div class="logo">
        <img [src]="logo">
        <span (click)="notifyParent()">PhotoFolio</span>
    </div>
    <nav class="navigation">
        <a (click)="notifyParent()" href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#galeria">Galería</a>
    </nav>
    <div class="social-icons">
        <a href="https://facebook.com"><img [src]="img1"></a>
        <a href="https://twitter.com"><img [src]="img2"></a>
        <a href="https://instagram.com"><img [src]="img3"></a>
    </div>
</div>`,
  styleUrl: './encabezado.component.css',
  encapsulation: ViewEncapsulation.ShadowDom

})
export class EncabezadoComponent {
  @Output() notificacion: EventEmitter<string>= new EventEmitter<string>();

  notifyParent(){
    this.notificacion.emit('Se encuentra en la página Principal')
  }
  logo='../../../camara-icon.png';
  img1='../../../facebook-icon.png';
  img2='../../../twitter-icon.png';
  img3='../../../instagram-icon.png';

}
