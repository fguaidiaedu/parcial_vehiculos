# Proyecto Angular: Lista de Vehículos

## Descripción

Este proyecto está desarrollado en Angular 20 y muestra un listado de vehículos y un resumen de marcas.

- **Módulo:** `VehiculoModule` 
- **Componente listar:** `ListaVehiculo` 
- **Servicio:** `VehiculoService` para obtener los vehículos desde un JSON o API
- **UI:**
  - Tabla con vehículos (marca, línea y modelo)
  - Resumen de marcas con cantidad de vehículos por cada marca
- **Tests unitarios:**
  - Se generan datos aleatorios con Faker para pruebas
  - Se verifica que la tabla y el resumen de marcas se generen correctamente

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/fguaidiaedu/parcial_vehiculos.git
cd parcial_vehiculos
```

2. Instalar dependencias:

```bash
npm install
```

## Ejecutar la aplicación

```bash
ng serve
```

Abre en el navegador: http://localhost:4200/

## Probar la aplicación

Tests unitarios con Jasmine + Karma

```bash
ng test
```

## Estilos

- Se usa Bootstrap para estilos básicos de tabla y layout
- Los párrafos del resumen de marcas están formateados con clases `mb-0` para evitar espacios extras

