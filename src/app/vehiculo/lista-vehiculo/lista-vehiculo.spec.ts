import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaVehiculo } from './lista-vehiculo';
import { Vehiculo } from '../../models/vehiculo';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { VehiculoService } from '../vehiculo.service';

describe('ListaVehiculo', () => {
  let component: ListaVehiculo;
  let fixture: ComponentFixture<ListaVehiculo>;
  let mockVehiculoService: any;

  beforeEach(async () => {

    const vehiculosFalsos: Vehiculo[] = Array.from({ length: 3 }).map((_, i) => {
      return new Vehiculo(
        i + 1,
        faker.vehicle.manufacturer(),           // marca
        faker.vehicle.model(),                  // linea
        faker.vehicle.vin(),                    // referencia
        faker.number.int({ min: 2000, max: 2025 }), // modelo
        faker.number.int({ min: 0, max: 200000 }),  // kilometraje
        faker.color.human(),                    // color
        faker.image.urlLoremFlickr({ category: 'transport', width: 200, height: 150 }) // imagen
      );
    });

    mockVehiculoService = {
      getVehiculos: jasmine.createSpy('getVehiculos').and.returnValue(of(vehiculosFalsos))
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, ListaVehiculo],
      providers: [
        { provide: VehiculoService, useValue: mockVehiculoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVehiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with 3 rows plus header', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);
    expect(component.vehiculos.length).toBe(3);
  });
});
