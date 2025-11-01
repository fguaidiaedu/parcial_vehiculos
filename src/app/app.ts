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
}
