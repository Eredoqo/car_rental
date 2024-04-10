import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Role } from "./role";

async function seed() {
  const makes = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Hyundai",
    "Kia",
    "Subaru",
    "Volkswagen",
    "Mercedes-Benz",
    "BMW",
    "Audi",
  ];
  const models = [
    "Corolla",
    "Civic",
    "Mustang",
    "Camaro",
    "Altima",
    "Elantra",
    "Sorento",
    "Forester",
    "Golf",
    "C-Class",
    "3 Series",
    "A4",
  ];
  const years = Array.from({ length: 12 }, (_, i) => 2010 + i);
  const statuses = Array.from({ length: 12 }, (_, i) =>
    i % 2 === 0 ? "available" : "unavailable"
  );

  const ratings = Array.from({ length: 12 }, (_, i) =>
    Math.floor(Math.random() * 6)
  );

  for (let i = 0; i < 12; i++) {
    const car = await prisma.car.create({
      data: {
        make: makes[i],
        model: models[i],
        year: years[i],
        status: statuses[i],
      },
    });

    const carSpec = await prisma.carSpec.create({
      data: {
        carTitle: `${makes[i]} ${models[i]}`,
        image: `path/to/${makes[i]}_${models[i]}_image.png`,
        description: `A reliable and fuel-efficient ${makes[i]} ${models[i]}, perfect for city driving.`,
        body: "Sedan",
        rated: ratings[i],
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
        carId: car.id,
      },
    });

    const user1 = await prisma.user.upsert({
      where: { email: "user1@example.com" },
      update: {},
      create: {
        firstName: "User",
        lastName: "One",
        email: "user1@example.com",
        password: "userpassword",
        role: Role.USER,
        username: "user1",
        phone: "1234567890",
        location: "Location 1",
      },
    });

    const rental = await prisma.rental.create({
      data: {
        startDate: new Date(2024, 0, 5),
        endDate: new Date(2024, 0, 10),
        totalCost: 300.0,
        carId: car.id,
        userId: user1.id,
      },
    });

    const rate = await prisma.rate.create({
      data: {
        dailyRate: 20.0,
        weeklyRate: 120.0,
        carId: car.id,
      },
    });
  }

  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      firstName: "Admin",
      lastName: "User",
      email: "admin@example.com",
      password: "adminpassword",
      role: Role.ADMIN,
      username: "admin",
      phone: "1234567890",
      location: "Location Admin",
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: "user1@example.com" },
    update: {},
    create: {
      firstName: "User",
      lastName: "One",
      email: "user1@example.com",
      password: "userpassword",
      role: Role.USER,
      username: "user1",
      phone: "1234567890",
      location: "Location 1",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "user2@example.com" },
    update: {},
    create: {
      firstName: "User",
      lastName: "Two",
      email: "user2@example.com",
      password: "userpassword",
      role: Role.USER,
      username: "user2",
      phone: "2345678901",
      location: "Location 2",
    },
  });

  const user3 = await prisma.user.upsert({
    where: { email: "user3@example.com" },
    update: {},
    create: {
      firstName: "User",
      lastName: "Three",
      email: "user3@example.com",
      password: "userpassword",
      role: Role.USER,
      username: "user3",
      phone: "3456789012",
      location: "Location 3",
    },
  });

  const service1 = await prisma.services.create({
    data: {
      serviceTitle: "Wedding Ceremony",
      image: "path/to/wedding_ceremony_service_image.png",
      description:
        "A comprehensive planning and coordination service for your wedding ceremony, ensuring a memorable and stress-free experience.",
      price: 500,
    },
  });

  const service2 = await prisma.services.create({
    data: {
      serviceTitle: "City Transfer",
      image: "path/to/city_transfer_service_image.png",
      description:
        "A convenient and comfortable city transfer service, ensuring a smooth journey from your current location to your destination.",
      price: 300,
    },
  });
  const service3 = await prisma.services.create({
    data: {
      serviceTitle: "Airport Transfer",
      image: "path/to/airport_transfer_service_image.png",
      description:
        "A reliable and timely airport transfer service, ensuring you reach your flight on time or get to your destination swiftly after a long journey.",
      price: 100,
    },
  });
  const service4 = await prisma.services.create({
    data: {
      serviceTitle: "Whole City Tour",
      image: "path/to/car_wash_service_image.png",
      description:
        "The Whole City Tour service offers a comprehensive car wash, providing thorough interior and exterior cleaning for vehicles.",
      price: 400,
    },
  });
}
seed();
