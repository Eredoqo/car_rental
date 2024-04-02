import { prisma } from "../dbservices";
export async function getAllServices() {
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
