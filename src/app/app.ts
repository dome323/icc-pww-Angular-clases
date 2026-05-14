import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './components/app-header/app-header';
import { AppFooterComponent } from './components/app-footer/footer';

@Component({
  selector: 'aplicacion',

  standalone: true,

  imports: [
    AppHeaderComponent,
    AppFooterComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('ppw-angular');

  isLoggedIn = false;

  materias = [
    'Programacion',
    'Base de Datos',
    'Redes'
  ];

}