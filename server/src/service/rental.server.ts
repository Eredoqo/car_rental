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
              customerId: true,
              startDate: true,
              endDate: true,
            },
          },
        },
      },
      Customer: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  });
}
