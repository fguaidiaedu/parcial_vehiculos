import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVehiculo } from './lista-vehiculo/lista-vehiculo';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaVehiculo
  ],
  exports: [ListaVehiculo]
})
export class VehiculoModule { }
