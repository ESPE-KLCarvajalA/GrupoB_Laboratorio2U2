import { Component } from '@angular/core';
import {  EventEmitter } from '@angular/core';
import {  Output } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Output() showBio = new EventEmitter<void>();

  emitShowBio() {
    this.showBio.emit();
  }
}
