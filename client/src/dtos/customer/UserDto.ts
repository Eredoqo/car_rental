import { RentalDto } from "../rental/RentalDto";

export type UserDto = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  rental: RentalDto[];
};
