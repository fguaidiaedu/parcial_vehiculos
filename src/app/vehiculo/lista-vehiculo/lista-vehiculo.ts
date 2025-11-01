import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../vehiculo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-vehiculo',
  imports: [CommonModule],
  templateUrl: './lista-vehiculo.html',
  styleUrl: './lista-vehiculo.css',
})
export class ListaVehiculo implements OnInit{

  vehiculos: Array<Vehiculo> = []; 

  constructor(private vehiculoService: VehiculoService) {}
  
  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

}
