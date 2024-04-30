import { UserDto } from "@/dtos/customer/UserDto";
import { createContext, useState } from "react";

type CustomerContextType = {
  customers: UserDto[] | null;
  setCustomers: (customers: UserDto[] | null) => void;
  removeCustomers: (customers: UserDto[] | null) => void;
  updateCustomers: (customers: UserDto[] | null) => void;
};

const CustomerContext = createContext<CustomerContextType>({
  customers: null,
  setCustomers: (customers: UserDto[] | null) => {
    console.debug(customers);
  },
  removeCustomers: (customers: UserDto[] | null) => {
    console.debug(customers);
  },
  updateCustomers: (customers: UserDto[] | null) => {
    console.debug(customers);
  },
});

const CustomerContextProvider = ({ children }: never) => {
  const [customers, setCustomers] = useState<UserDto[] | null>(null);

  const removeCustomers = (customers: UserDto[] | null) => {
    console.debug(customers);
  };

  const updateCustomers = (customers: UserDto[] | null) => {
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
