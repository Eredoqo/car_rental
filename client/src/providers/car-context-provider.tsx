import React, { createContext, useContext, useState, ReactNode } from "react";
import { CarDto } from "@/dtos/car/CarDto";

interface CarContextType {
  cars: CarDto[] | null;
  createLocalCar: (car: CarDto) => void;
  updateLocalCar: (id: string, updatedData: CarDto) => void;
  deleteLocalCar: (id: string) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function useCar() {
  return useContext(CarContext);
}

interface CarContextProviderProps {
  children: ReactNode;
}

const CarContextProvider: React.FC<CarContextProviderProps> = ({
  children,
}) => {
  const [cars, setCars] = useState<CarDto[] | null>(null);

  function createLocalCar(car: CarDto) {
    setCars((prevCars) => {
      return [car, ...(prevCars || [])];
    });
  }

  function updateLocalCar(id: string, updatedData: CarDto) {
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

  function deleteLocalCar(id: string) {
    setCars((prevCars) => {
      return (prevCars || []).filter((car) => car.id !== id);
    });
  }

  return (
    <CarContext.Provider
      value={{
        cars,
        createLocalCar,
        updateLocalCar,
        deleteLocalCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
export { CarContext };
