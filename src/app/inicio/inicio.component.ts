import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  headingText="Comunidad Fotográfica"
  subheadingText="Visión, arte y pasión en cada fotografía"
  descriptionText="El éxito en la fotografía se logra con paciencia, dedicación y una buena dosis de pasión. Las mejores fotos no se toman, se crean."
  
  onclick(){
    alert('��Hola, amiga!')
  }

  gallery1='https://www.lieben.no/wp-content/uploads/2018/03/sleepy.jpg';
  gallery2='https://www.lieben.no/wp-content/uploads/2018/03/maria4-710x1065.jpg';
  gallery3='https://www.lieben.no/wp-content/uploads/2018/03/320.jpg';

  isAuthenticated: boolean = false;

  toggleAuth() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
