import React, { createContext, useState, ReactNode } from "react";
import { CarDto } from "@/dtos/car/CarDto";

interface CarContextType {
  cars: CarDto[] | null;
  createCar: (car: CarDto) => void;
  updateCar: (id: string, updatedData: CarDto) => void;
  deleteCar: (id: string) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

interface CarContextProviderProps {
  children: ReactNode;
}

const CarContextProvider: React.FC<CarContextProviderProps> = ({
  children,
}) => {
  const [cars, setCars] = useState<CarDto[] | null>(null);

  function createCar(car: CarDto) {
    setCars((prevCars) => {
      return [car, ...(prevCars || [])];
    });
  }

  function updateCar(id: string, updatedData: CarDto) {
    setCars((prevCars) => {
      return (prevCars || []).map((car) => {
        if (car.id === id) {
          return { ...car, ...updatedData };
        } else {
          return car;
        }
      });
    });
  }

  function deleteCar(id: string) {
    setCars((prevCars) => {
      return (prevCars || []).filter((car) => car.id !== id);
    });
  }

  return (
    <CarContext.Provider
      value={{
        cars,
        createCar,
        updateCar,
        deleteCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
export { CarContext };
