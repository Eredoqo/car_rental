import { prisma } from "../dbservices";

export function getRental() {
  return prisma.services.findMany({
    select: {
      id: true,
      serviceTitle: true,
      price: true,
      image: true,
      description: true,
    },
  });
}
