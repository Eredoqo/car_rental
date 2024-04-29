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
  const prices = [5, 10, 15, 20, 25];

  const ratings = Array.from({ length: 12 }, (_, i) =>
    Math.floor(Math.random() * 6)
  );

  const transmissions = ["Automatic", "Manual"];
  const fuels = ["Petrol", "Diesel", "GPL", "Hybrid", "Electric"];
  const bodies = ["Sedan", "Hatchback", "SUV", "Convertible", "Coupe", "Wagon"];

  const startDates = [
    new Date(2025, 0, 5),
    new Date(2025, 1, 10),
    new Date(2025, 2, 15),
    new Date(2025, 3, 20),
    new Date(2025, 4, 25),
  ];

  const endDates = [
    new Date(2025, 0, 20),
    new Date(2025, 1, 25),
    new Date(2025, 2, 30),
    new Date(2025, 3, 5),
    new Date(2025, 4, 10),
  ];

  const locations = [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
  ];

  const times = ["10:00", "11:00", "12:00", "13:00", "14:00"];

  const dailyRate = 20.0;
  const weeklyRate = 120.0;

  for (let i = 0; i < 12; i++) {
    const car = await prisma.car.create({
      data: {
        make: makes[i],
        model: models[i],
        year: years[i],
        status: statuses[i],
        isNew: i < 3 ? "New" : "",
      },
    });

    const carSpec = await prisma.carSpec.create({
      data: {
        carTitle: `${makes[i]} ${models[i]}`,
        image: `path/to/${makes[i]}_${models[i]}_image.png`,
        description: `A reliable and fuel-efficient ${makes[i]} ${models[i]}, perfect for city driving.`,
        body: bodies[i % bodies.length],
        rated: ratings[i],
        price: prices[i % prices.length],
        mileage: Math.floor(Math.random() * (200000 - 10000 + 1)) + 10000,
        transmission: transmissions[i % transmissions.length],
        seats: 5,
        fuel: fuels[i % fuels.length],
        gps: i % 2 === 0,
        childSeat: "Optional",
        aircondition: true,
        music: i % 2 === 0,
        carKit: i % 2 === 0,
        audio: i % 2 === 0,
        climateControl: i % 2 === 0,
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

    for (let i = 0; i < 5; i++) {
      const rentalDuration = Math.ceil(
        (endDates[i].getTime() - startDates[i].getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const weeks = Math.floor(rentalDuration / 7);
      const days = rentalDuration % 7;
      const totalCost = weeks * weeklyRate + days * dailyRate;
      const rental = await prisma.rental.create({
        data: {
          startDate: startDates[i],
          endDate: endDates[i],
          pickUpLocation: locations[i],
          dropOffLocation: locations[(i + 1) % 5],
          timePickedUp: new Date(`2025-01-05T${times[i]}:00Z`),
          timeDroppedOff: new Date(`2025-01-05T${times[(i + 1) % 5]}:00Z`),
          totalCost: totalCost,
          carId: car.id,
          userId: user1.id,
        },
      });

      if (rental.startDate > new Date()) {
        await prisma.car.update({
          where: { id: car.id },
          data: { status: "booked" },
        });
      }
    }

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
