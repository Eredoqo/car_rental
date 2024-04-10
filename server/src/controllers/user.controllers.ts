import { Role } from "@prisma/client";
import { prisma } from "../dbservices";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  username: string;
  phone: string;
  location: string;
}

async function getUserInformation() {
  return prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      username: true,
      phone: true,
      location: true,
      Rentals: {
        select: {
          id: true,
          userId: true,
          totalCost: true,
          carId: true,
          startDate: true,
          endDate: true,
        },
      },
    },
  });
}

async function createUser(userData: UserData) {
  return prisma.user.create({
    data: userData,
  });
}

async function updateUser(id: string, userData: UserData) {
  return prisma.user.update({
    where: { id },
    data: userData,
  });
}

async function deleteUser(id: string) {
  return prisma.user.delete({
    where: { id },
  });
}

export { getUserInformation, createUser, updateUser, deleteUser };
