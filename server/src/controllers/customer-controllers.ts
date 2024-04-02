import { prisma } from "../dbservices";

export async function getAllCustomers() {
  return prisma.customer.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
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
  });
}
