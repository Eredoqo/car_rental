import { CustomerDto } from "@/dtos/customer/CustomerDto";
import { createContext, useState } from "react";

type CustomerContextType = {
  customers: CustomerDto[] | null;
  setCustomers: (customers: CustomerDto[] | null) => void;
  removeCustomers: (customers: CustomerDto[] | null) => void;
  updateCustomers: (customers: CustomerDto[] | null) => void;
};

const CustomerContext = createContext<CustomerContextType>({
  customers: null,
  setCustomers: (customers: CustomerDto[] | null) => {
    console.debug(customers);
  },
  removeCustomers: (customers: CustomerDto[] | null) => {
    console.debug(customers);
  },
  updateCustomers: (customers: CustomerDto[] | null) => {
    console.debug(customers);
  },
});

const CustomerContextProvider = ({ children }: never) => {
  const [customers, setCustomers] = useState<CustomerDto[] | null>(null);

  const removeCustomers = (customers: CustomerDto[] | null) => {
    console.debug(customers);
  };

  const updateCustomers = (customers: CustomerDto[] | null) => {
    console.debug(customers);
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        setCustomers,
        removeCustomers,
        updateCustomers,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
export { CustomerContext };
