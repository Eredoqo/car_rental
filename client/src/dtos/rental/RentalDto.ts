import { CarDto } from "../car/CarDto";
import { UserDto } from "../user/user";

export type RentalDto = {
  id: string;
  startDate: Date;
  endDate: Date;
  totalCost: number;
  pickUpLocation: string;
  dropOffLocation: string;
  timePickedUp: Date;
  timeDroppedOff: Date;
  carId: string;
  customerId: string;
  Car: CarDto;
  User: UserDto;
};
