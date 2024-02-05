import { prisma } from "../dbservices";

export function getRental() {
  return prisma.rental.findMany({
    select: {
      id: true,
      carId: true,
      totalCost: true,
      customerId: true,
      startDate: true,
      endDate: true,
    },
  });
}
