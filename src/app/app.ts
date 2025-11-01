import { Component, signal } from '@angular/core';
import { VehiculoModule } from './vehiculo/vehiculo-module';

@Component({
  selector: 'app-root',
  imports: [
    VehiculoModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parcial_vehiculos');

  footer = "Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo";

}
