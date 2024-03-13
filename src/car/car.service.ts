/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schema/car.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name)
    private carModel: Model<Car>,
  ) {}

  async findAll(): Promise<Car[]> {
    const cars = await this.carModel.find();
    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.carModel.findById(id);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  async createCar(car: Car): Promise<Car> {
    const newCar = await this.carModel.create(car);
    return newCar;
  }

  async updateById(id: string, car: Car): Promise<Car> {
    const updatedCar = await this.carModel.findByIdAndUpdate(id, car, {
      new: true,
      runValidators: true,
    });
    if (!updatedCar) {
      throw new NotFoundException('Car not found');
    }
    return updatedCar;
  }

  async deleteById(id: string): Promise<Car> {
    const deletedCar = await this.carModel.findByIdAndDelete(id);
    if (!deletedCar) {
      throw new NotFoundException('Car not found');
    }
    return deletedCar;
  }
}
