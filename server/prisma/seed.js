import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const car = await prisma.car.create({
    data: {
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      status: "available",
    },
  });

  const customer = await prisma.customer.upsert({
    where: { email: "johndoe@example.com" },
    update: {},
    create: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
    },
  });

  const rental = await prisma.rental.create({
    data: {
      startDate: new Date(2024, 0, 5),
      endDate: new Date(2024, 0, 10),
      totalCost: 300.0,
      carId: car.id,
      customerId: customer.id,
    },
  });

  const rate = await prisma.rate.create({
    data: {
      dailyRate: 20.0,
      weeklyRate: 120.0,
      carId: car.id,
    },
  });

  const carSpec = await prisma.carSpec.create({
    data: {
      carTitle: "Toyota Corolla",
      image: "path/to/toyota_corolla_image.png",
      description:
        "A reliable and fuel-efficient car, perfect for city driving.",
      body: "Sedan",
      price: 20000,
      mileage: 30,
      transmission: "Automatic",
      seats: 5,
      fuel: "Petrol",
      gps: true,
      childSeat: "Optional",
      aircondition: true,
      music: true,
      carKit: true,
      audio: true,
      climateControl: true,
    },
  });

  const service = await prisma.services.create({
    data: {
      serviceTitle: "Premium Car Wash",
      image: "path/to/car_wash_service_image.png",
      description:
        "A thorough interior and exterior cleaning for your vehicle.",
      price: 100,
    },
  });
}

seed();
