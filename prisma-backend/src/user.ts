// src/user.ts

import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data: User) => {
  return prisma.user.create({ data });
};

export const getUsers = () => {
  return prisma.user.findMany();
};

export const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};