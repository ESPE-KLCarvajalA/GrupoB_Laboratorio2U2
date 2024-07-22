import { Component } from '@angular/core';
import {  EventEmitter } from '@angular/core';
import {  Output } from '@angular/core';
import {  HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Output() showBio = new EventEmitter<void>();

  onShowBioClick() {
    this.showBio.emit(); // Emitir el evento para el componente padre
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    alert('Mostrando más datos');
  }

  
  titulo="Sobre Nosotros"
  cargo='Fotógrafo Profesional'
  imagenUrl= '../../img.jpg';

    paragraph1: string = '¡Hola! Soy Emily Johnson, una fotógrafa profesional con sede en la vibrante ciudad de Nueva York. Con una pasión por capturar momentos auténticos y emociones genuinas, me especializo en retratos, fotografía de bodas y fotografía de estilo de vida.';
    paragraph2: string = 'No puedo esperar para conectarme contigo y ayudarte a capturar momentos que perdurarán para siempre. Ya sea que estés planeando una sesión de fotos íntima o una boda extravagante, ¡estoy aquí para hacer realidad tus visiones fotográficas!';

}
