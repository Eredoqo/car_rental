import { prisma } from "../dbservices";

export function getCarSpec() {
  return prisma.carSpec.findMany({
    select: {
      id: true,
      carTitle: true,
      image: true,
      description: true,
      body: true,
      price: true,
      mileage: true,
      transmission: true,
      seats: true,
      fuel: true,
      gps: true,
      childSeat: true,
      aircondition: true,
      music: true,
      carKit: true,
      audio: true,
      climateControl: true,
    },
  });
}
