import { RentalDto } from "../rental/RentalDto";

export type CustomerDto = {
  id: string;
  firstName: string;
  lastname: string;
  email: string;
  rental: RentalDto[];
};
