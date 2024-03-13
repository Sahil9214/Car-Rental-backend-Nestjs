/* eslint-disable prettier/prettier */
import { carEngine } from '../schema/car.schema';

export class createDto {
  readonly make: string;
  readonly model: string;
  readonly year: string;
  readonly color: string;
  readonly milage: string;
  readonly price: number;
  readonly engine: carEngine;
}
