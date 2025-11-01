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

  totalMarcas: { marca: string, cantidad: number }[] = [];

  constructor(private vehiculoService: VehiculoService) {}
  
  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.generarTotalMarcas();
    });
  }

  private generarTotalMarcas(): void {
    const resumen: { [marca: string]: number } = {};

    this.vehiculos.forEach(v => {
      resumen[v.marca] = (resumen[v.marca] || 0) + 1;
    });

    this.totalMarcas = Object.entries(resumen).map(([marca, cantidad]) => ({ marca, cantidad }));

  }
}
