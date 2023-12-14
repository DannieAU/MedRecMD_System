// src/Insurance.ts

import { Insurance, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createInsurance = async (data: Insurance) => {
  return prisma.insurance.create({ data });
};

export const getInsurances = () => {
  return prisma.insurance.findMany();
};

export const getInsuranceById = (id: number) => {
  return prisma.insurance.findUnique({ where: { id } });
};

export const updateInsurance = async (
  id: number,
  data: Insurance
) => {
  return prisma.insurance.update({
    where: { id },
    data,
  });
};

export const deleteInsurance = (id: number) => {
  return prisma.insurance.delete({
    where: { id },
  });
};
