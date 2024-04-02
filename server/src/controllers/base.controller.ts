import { prisma } from "../dbservices";

export async function getAllServerIformation() {
  return prisma.car.findMany({
    select: {
      id: true,
      Rentals: {
        select: {
          id: true,

          totalCost: true,
          customerId: true,
          startDate: true,
          endDate: true,
        },
      },
      Rates: {
        select: {
          id: true,
          weeklyRate: true,
          dailyRate: true,
        },
      },
    },
  });
}
