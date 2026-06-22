import { Controller, Get } from '@nestjs/common';

const vehicles = [
  {
    id: 'toyota-vios-2020',
    name: 'Toyota Vios 2020 1.5G',
    year: 2020,
    mileage: '42.000 km',
    price: 468000000,
    status: 'available',
  },
  {
    id: 'honda-city-2021',
    name: 'Honda City 2021 RS',
    year: 2021,
    mileage: '35.000 km',
    price: 545000000,
    status: 'available',
  },
];

@Controller('vehicles')
export class VehiclesController {
  @Get()
  findAll() {
    return {
      success: true,
      data: vehicles,
      meta: {
        page: 1,
        limit: vehicles.length,
        total: vehicles.length,
        totalPages: 1,
      },
    };
  }
}
