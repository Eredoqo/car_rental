import { CarDto } from "../car/CarDto";
import { CustomerDto } from "../customer/CustomerDto";

export type RentalDto = {
  id: string;
  startDta: Date;
  endDate: Date;
  totalCoast: number;
  carId: string;
  customerId: string;
  car: CarDto[];
  customer: CustomerDto[];
};
