import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { PadreComponent } from "./padre/padre.component";
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent,InicioComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrupoB_Laboratorio2U2';
}
