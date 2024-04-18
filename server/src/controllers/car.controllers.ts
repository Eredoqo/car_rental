import { prisma } from "../dbservices";

export interface CarData {
  make: string;
  model: string;
  year: number;
  status: string;
  carSpec: CarSpecData;
}

export interface CarSpecData {
  carTitle: string;
  image: string;
  description: string;
  rated: number;
  body: string;
  price: number;
  mileage: number;
  transmission: string;
  seats: number;
  fuel: string;
  gps: boolean;
  childSeat: string;
  aircondition: boolean;
  music: boolean;
  carKit: boolean;
  audio: boolean;
  climateControl: boolean;
}

async function getCarInformation() {
  return prisma.car.findMany({
    select: {
      id: true,
      make: true,
      model: true,
      year: true,
      status: true,
      CarSpec: {
        select: {
          carTitle: true,
          image: true,
          description: true,
          rated: true,
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
      },
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
      Rates: {
        select: {
          id: true,
          carId: true,
          weeklyRate: true,
          dailyRate: true,
        },
      },
    },
  });
}

async function createCar(carData: CarData) {
  const car = await prisma.car.create({
    data: {
      make: carData.make,
      model: carData.model,
      year: carData.year,
      status: carData.status,
    },
  });

  await prisma.carSpec.create({
    data: {
      ...carData.carSpec,
      carId: car.id,
    },
  });

  return car;
}

async function updateCar(id: string, carData: CarData) {
  const car = await prisma.car.update({
    where: { id },
    data: {
      make: carData.make,
      model: carData.model,
      year: carData.year,
      status: carData.status,
    },
  });

  await prisma.carSpec.update({
    where: { carId: car.id },
    data: carData.carSpec,
  });

  return car;
}

async function deleteCar(id: string) {
  console.log(`Deleting car with id: ${id}`);

  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) {
    console.log(`Car with id: ${id} does not exist`);
    return;
  }

  try {
    await prisma.carSpec.delete({ where: { carId: id } });
    return await prisma.car.delete({ where: { id } });
  } catch (error) {
    console.error(`Error deleting car with id: ${id}`, error);
  }
}

export { getCarInformation, createCar, updateCar, deleteCar };
