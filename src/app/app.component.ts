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
  bio = 'Emily Johnson is a professional photographer with over 10 years of experience in capturing the beauty of life through her lens.';

  handleShowBio() {
    this.bioVisible = !this.bioVisible; // Toggle the bio visibility
  }}
