import { CarContext } from "@/providers/car-context-provider";
import { useContext } from "react";

export function useCar() {
  return useContext(CarContext);
}
