/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, carSchema } from './schema/car.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: carSchema }]), // Provide the correct structure for forFeature
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
