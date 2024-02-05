import { prisma } from "../dbservices";

export function getCustomerInfomation() {
  return prisma.customer.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  });
}
