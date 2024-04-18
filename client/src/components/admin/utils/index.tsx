export interface Car {
  id: string;
  make: string;
  model: string;
  year: string;
  status: string;
  CarSpec: {
    carTitle: string;
    image: string;
    description: string;
    rated: string;
    body: string;
    price: string;
    mileage: string;
    transmission: string;
    seats: string;
    fuel: string;
    gps: boolean;
    childSeat: string;
    aircondition: boolean;
    music: boolean;
    carKit: boolean;
    audio: boolean;
    climateControl: boolean;
  };
}
