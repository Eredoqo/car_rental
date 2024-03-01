import { RentalDto } from "@/dtos/rental/RentalDto";
import { createContext, useState } from "react";

type RentalContextType = {
  rentals: RentalDto[] | null;
  setRentals: (rentals: RentalDto[] | null) => void;
  removeRentals: (rentals: RentalDto[] | null) => void;
  updateRentals: (rentals: RentalDto[] | null) => void;
};

const RentalContext = createContext<RentalContextType>({
  rentals: null,
  setRentals: (rentals: RentalDto[] | null) => {
    console.debug(rentals);
  },
  removeRentals: (rentals: RentalDto[] | null) => {
    console.debug(rentals);
  },
  updateRentals: (rentals: RentalDto[] | null) => {
    console.debug(rentals);
  },
});

const RentalContextProvider = ({ children }: never) => {
  const [rentals, setRentals] = useState<RentalDto[] | null>(null);

  const removeRentals = (rentals: RentalDto[] | null) => {
    console.debug(rentals);
  };

  const updateRentals = (rentals: RentalDto[] | null) => {
    console.debug(rentals);
  };

  return (
    <RentalContext.Provider
      value={{
        rentals,
        setRentals,
        removeRentals,
        updateRentals,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export default RentalContext;
export { RentalContextProvider };
