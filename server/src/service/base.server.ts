import { prisma } from "../dbservices";

export function getCarInfomation() {
  return prisma.car.findMany({
    select: {
      id: true,
      make: true,
      model: true,
      year: true,
      status: true,
    },
  });
}
