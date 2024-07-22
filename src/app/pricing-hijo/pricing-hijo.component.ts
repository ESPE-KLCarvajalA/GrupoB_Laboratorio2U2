import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-hijo.component.html',
  styleUrls: ['./pricing-hijo.component.css']
})
export class PricingHijoComponent {
  @Input() service: string = '';
  @Input() price: string = '';
  @Output() close = new EventEmitter<void>();

  getDescription(): string {
    switch (this.service) {
      case 'Sesiones Fotográficas':
        return 'Captura tus momentos más preciados con nuestras sesiones fotográficas profesionales. Perfectas para toda la familia.';
      case 'Impresiones Fotográficas':
        return 'Transforma tus recuerdos en impresiones de alta calidad. Perfectas para decorar tus espacios favoritos.';
      case 'Regalos Personalizados':
        return 'Sorprende a tus seres queridos con regalos personalizados únicos y creativos para cualquier ocasión.';
      case 'Fotografía Aérea y Video Drone':
        return 'Descubre nuevas perspectivas con nuestras fotografías aéreas y videos con drones. Ideales para eventos y promociones.';
      default:
        return '';
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}