import { prisma } from "../dbservices";

export interface CarData {
  make: string;
  model: string;
  year: number;
  status: string;
}

async function getCarInformation() {
  return prisma.car.findMany({
    select: {
      id: true,
      make: true,
      model: true,
      year: true,
      status: true,
      Rentals: {
        select: {
          id: true,
          carId: true,
          totalCost: true,
          userId: true,
          startDate: true,
          endDate: true,
        },
      },
      Rates: {
        select: {
          id: true,
          carId: true,
          weeklyRate: true,
          dailyRate: true,
        },
      },
    },
  });
}

async function createCar(carData: CarData) {
  return prisma.car.create({
    data: carData,
  });
}

async function updateCar(id: string, carData: CarData) {
  return prisma.car.update({
    where: { id },
    data: carData,
  });
}

async function deleteCar(id: string) {
  return prisma.car.delete({
    where: { id },
  });
}

export { getCarInformation, createCar, updateCar, deleteCar };
