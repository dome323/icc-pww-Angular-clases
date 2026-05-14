import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./components/app-header/app-header";
import { AppFooterComponent } from './components/app-footer/footer';

@Component({
  selector: 'aplicacion',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ppw-angular');
  
  isLoggedIn =(false);
  
  materias = ['Programacion','Base de Datos','Redes'];
  
}