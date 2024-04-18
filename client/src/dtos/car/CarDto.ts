import { CarSpecDto } from "../car-spec/CarSpecDto";

export type CarDto = {
  id: string;
  make: string;
  model: string;
  year: number;
  status: string;
  carSpec: CarSpecDto[];
};
