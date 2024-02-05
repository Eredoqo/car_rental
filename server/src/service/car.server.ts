import { prisma } from "../dbservices";

export function getCarInfomation() {
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
          customerId: true,
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
