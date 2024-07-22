import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerText: string = 'PhotoFolio';
  socialLinks: { href: string, iconClass: string, highlight?: boolean }[] = [
    { href: 'https://facebook.com', iconClass: 'fab fa-facebook' },
    { href: 'https://twitter.com', iconClass: 'fab fa-twitter' },
    { href: 'https://instagram.com', iconClass: 'fab fa-instagram' },
    { href: 'https://linkedin.com', iconClass: 'fab fa-linkedin' }
  ];

  changeFooterText() {
    this.footerText = this.footerText === 'PhotoFolio' ? 'NewFooterText' : 'PhotoFolio';
  }

  highlightIcon(link: { href: string, iconClass: string, highlight?: boolean }) {
    link.highlight = true;
  }

  unhighlightIcon(link: { href: string, iconClass: string, highlight?: boolean }) {
    link.highlight = false;
  }
}
