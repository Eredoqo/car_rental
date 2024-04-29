import { prisma } from "../dbservices";
export async function getAllRentals() {
  return prisma.rental.findMany({
    select: {
      id: true,
      carId: true,
      totalCost: true,
      userId: true,
      startDate: true,
      endDate: true,
      pickUpLocation: true,
      dropOffLocation: true,
      timePickedUp: true,
      timeDroppedOff: true,
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
        },
      },
      User: {
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
