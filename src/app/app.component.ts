import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CardComponent } from './card/card.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet, PadreComponent,InicioComponent,FooterComponent,ServiciosComponent,CardComponent,PricingComponent,AboutComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bioVisible = false;
  bio = 'Mi trayectoria como fotógrafa profesional se ha definido por mi dedicación a capturar la esencia de cada momento. Desde las risas espontáneas hasta los gestos más sutiles, mi objetivo es inmortalizar la belleza y la autenticidad en cada imagen que creo. Con una formación académica sólida y años de experiencia en el campo, he perfeccionado mi arte para ofrecer a mis clientes resultados excepcionales. ';

  handleShowBio() {
    this.bioVisible = !this.bioVisible; // Toggle the bio visibility
  }}
