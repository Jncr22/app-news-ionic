import { Component } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle-outline' },
    // Agrega aquí más páginas del menú si es necesario { title: 'Salir', url: '/exit', icon: 'exit' },
  ];
  constructor() {}
  exitApp() {
    App.exitApp();
  }
}
