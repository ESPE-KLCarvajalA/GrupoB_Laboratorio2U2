import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingHijoComponent } from '../pricing-hijo/pricing-hijo.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,PricingHijoComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  selectedService: string = '';
  selectedPrice: string = '';
  showModal: boolean = false;

  selectService(service: string, price: string): void {
    this.selectedService = service;
    this.selectedPrice = price;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
