import { RateDto } from "@/dtos/rate/rateDto";
import { createContext, useState } from "react";

type RateContextType = {
  rates: RateDto[] | null;
  setRates: (rates: RateDto[] | null) => void;
  removeRates: (rates: RateDto[] | null) => void;
  updateRates: (rates: RateDto[] | null) => void;
};

const RateContext = createContext<RateContextType>({
  rates: null,
  setRates: (rates: RateDto[] | null) => {
    console.debug(rates);
  },
  removeRates: (rates: RateDto[] | null) => {
    console.debug(rates);
  },
  updateRates: (rates: RateDto[] | null) => {
    console.debug(rates);
  },
});

const RateContextProvider = ({ children }: never) => {
  const [rates, setRates] = useState<RateDto[] | null>(null);

  const removeRates = (rates: RateDto[] | null) => {
    console.debug(rates);
  };

  const updateRates = (rates: RateDto[] | null) => {
    console.debug(rates);
  };

  return (
    <RateContext.Provider
      value={{
        rates,
        setRates,
        removeRates,
        updateRates,
      }}
    >
      {children}
    </RateContext.Provider>
  );
};

export default RateContextProvider;
export { RateContext };
