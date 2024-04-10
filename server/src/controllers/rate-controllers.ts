import { prisma } from "../dbservices";

export async function getAllRates() {
  return prisma.rate.findMany({
    select: {
      id: true,
      carId: true,
      weeklyRate: true,
      dailyRate: true,
      Car: {
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
      },
    },
  });
}
