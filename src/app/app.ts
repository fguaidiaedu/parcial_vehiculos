import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculoModule } from './vehiculo/vehiculo-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    VehiculoModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parcial_vehiculos');
}
