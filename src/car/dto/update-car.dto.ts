/* eslint-disable prettier/prettier */
import { carEngine } from '../schema/car.schema';

export class updateDto {
  readonly make: string;
  readonly model: string;
  readonly year: string;
  readonly color: string;
  readonly milage: string;
  readonly price: number;
  readonly engine: carEngine;
}
