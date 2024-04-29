export type CarDto = {
  id: string;
  make: string;
  model: string;
  year: number;
  status: string;
  isNew: string;
  CarSpec: {
    carTitle: string;
    image: string;
    description: string;
    rated: number;
    body: string;
    price: number;
    mileage: number;
    transmission: string;
    seats: number;
    fuel: string;
    gps: boolean;
    childSeat: string;
    aircondition: boolean;
    music: boolean;
    carKit: boolean;
    audio: boolean;
    climateControl: boolean;
  }[];
  Rentals: {
    id: string;
    carId: string;
    totalCost: number;
    userId: string;
    startDate: string;
    endDate: string;
  }[];
  Rates: {
    id: string;
    carId: string;
    weeklyRate: number;
    dailyRate: number;
  }[];
};
