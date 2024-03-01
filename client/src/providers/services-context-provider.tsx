import { ServicesDto } from "@/dtos/services/ServicesDto";
import { createContext, useState } from "react";

type ServicesContextType = {
  services: ServicesDto[] | null;
  setServices: (services: ServicesDto[] | null) => void;
  removeServices: (services: ServicesDto[] | null) => void;
  updateServices: (services: ServicesDto[] | null) => void;
};

const ServicesContext = createContext<ServicesContextType>({
  services: null,
  setServices: (services: ServicesDto[] | null) => {
    console.debug(services);
  },
  removeServices: (services: ServicesDto[] | null) => {
    console.debug(services);
  },
  updateServices: (services: ServicesDto[] | null) => {
    console.debug(services);
  },
});

const ServicesContextProvider = ({ children }: never) => {
  const [services, setServices] = useState<ServicesDto[] | null>(null);

  const removeServices = (services: ServicesDto[] | null) => {
    console.debug(services);
  };

  const updateServices = (services: ServicesDto[] | null) => {
    console.debug(services);
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        setServices,
        removeServices,
        updateServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;
export { ServicesContext };
