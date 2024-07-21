import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { InicioComponent } from "../inicio/inicio.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule, EncabezadoComponent, InicioComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

}
