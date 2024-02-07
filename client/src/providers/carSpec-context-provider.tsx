import { CarSpecDto } from "@/dtos/car-spec/CarSpecDto";
import { createContext, useState } from "react";

type CarSpecContextType = {
  carSpecs: CarSpecDto[] | null;
  setCarSpecs: (carSpecs: CarSpecDto[] | null) => void;
  removeCarSpecs: (carSpecs: CarSpecDto[] | null) => void;
  updateCarSpecs: (carSpecs: CarSpecDto[] | null) => void;
};

const CarSpecContext = createContext<CarSpecContextType>({
  carSpecs: null,
  setCarSpecs: (carSpecs: CarSpecDto[] | null) => {
    console.debug(carSpecs);
  },
  removeCarSpecs: (carSpecs: CarSpecDto[] | null) => {
    console.debug(carSpecs);
  },
  updateCarSpecs: (carSpecs: CarSpecDto[] | null) => {
    console.debug(carSpecs);
  },
});

const CarSpecContextProvider = ({ children }: never) => {
  const [carSpecs, setCarSpecs] = useState<CarSpecDto[] | null>(null);

  const removeCarSpecs = (carSpecs: CarSpecDto[] | null) => {
    console.debug(carSpecs);
  };

  const updateCarSpecs = (carSpecs: CarSpecDto[] | null) => {
    console.debug(carSpecs);
  };

  return (
    <CarSpecContext.Provider
      value={{
        carSpecs,
        setCarSpecs,
        removeCarSpecs,
        updateCarSpecs,
      }}
    >
      {children}
    </CarSpecContext.Provider>
  );
};

export default CarSpecContext;
export { CarSpecContextProvider };
