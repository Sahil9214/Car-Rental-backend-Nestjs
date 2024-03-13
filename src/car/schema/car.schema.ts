/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
export interface carEngine {
  size: string;
  type: string;
}

@Schema({
  timestamps: true,
})
export class Car {
  @Prop()
  make: string;
  @Prop()
  model: string;
  @Prop()
  year: string;
  @Prop()
  color: string;
  @Prop()
  milage: string;
  @Prop()
  price: number;
  @Prop({ type: SchemaTypes.Mixed }) // Decorate engine property with the type
  engine: carEngine;
}

export const carSchema = SchemaFactory.createForClass(Car);
