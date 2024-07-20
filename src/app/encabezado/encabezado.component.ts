import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css',
  encapsulation: ViewEncapsulation.ShadowDom

})
export class EncabezadoComponent {
  logo='../../../camara-icon.png';
  img1='../../../facebook-icon.png';
  img2='../../../twitter-icon.png';
  img3='../../../instagram-icon.png';

}
