import { prisma } from "../dbservices";

export function getRate() {
  return prisma.rate.findMany({
    select: {
      id: true,
      carId: true,
      weeklyRate: true,
      dailyRate: true,
    },
  });
}
