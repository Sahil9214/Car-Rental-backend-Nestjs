/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './schema/car.schema';
import { NotFoundException } from '@nestjs/common';
@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}
  @Get()
  async getAllCar(): Promise<Car[]> {
    return this.carService.findAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Car> {
    const car = await this.carService.findById(id);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }
  @Post()
  async createCar(@Body() car: Car): Promise<Car> {
    return this.carService.createCar(car);
  }
  @Put(':id')
  async updateCar(@Param('id') id: string, @Body() car: Car): Promise<Car> {
    return await this.carService.updateById(id, car);
  }
  @Delete(':id')
  async deleteCar(@Param('id') id: string): Promise<Car> {
    return await this.carService.deleteById(id);
  }
}
