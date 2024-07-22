import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'] 
})
export class ServiciosComponent implements OnInit, AfterViewInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = 'Contrátanos';
  @Input() buttonLink: string = '#';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.addIntersectionObserver();
  }

  addIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElements();
        }
      });
    }, options);

    observer.observe(document.querySelector('app-servicios') as Element);
  }

  animateElements(): void {
    const elements = document.querySelectorAll('.custom-box, .custom-title, .custom-paragraph, .cta-btn');
    elements.forEach((el) => {
      el.classList.add('animate');
    });
  }
}
