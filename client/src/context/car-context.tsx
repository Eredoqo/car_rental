import { CarDto } from "@/dto/car/CarDto";
import { createContext, useState } from "react";

type CarContextType = {
  cars: CarDto[] | null;
  setCars: (cars: CarDto[] | null) => void;
  removeCars: (cars: CarDto[] | null) => void;
  updateCars: (cars: CarDto[] | null) => void;
};

const CarContext = createContext<CarContextType>({
  cars: null,
  setCars: (cars: CarDto[] | null) => {
    console.debug(cars);
  },
  removeCars: (cars: CarDto[] | null) => {
    console.debug(cars);
  },
  updateCars: (cars: CarDto[] | null) => {
    console.debug(cars);
  },
});

const CarContextProvider = ({ children }: any) => {
  const [cars, setCars] = useState<CarDto[] | null>(null);

  const removeCars = (cars: CarDto[] | null) => {
    console.debug(cars);
  };

  const updateCars = (cars: CarDto[] | null) => {
    console.debug(cars);
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
        removeCars,
        updateCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
export { CarContext };
