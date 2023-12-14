// src/doctor.ts

import { Doctor, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createDoctor = async (data: Doctor) => {
  return prisma.doctor.create({ data });
};

export const getDoctors = () => {
  return prisma.doctor.findMany();
};

export const getDoctorById = (id: number) => {
  return prisma.doctor.findUnique({ where: { id } });
};

export const updateDoctor = async (id: number, data: Doctor) => {
  return prisma.doctor.update({
    where: { id },
    data,
  });
};

export const deleteDoctor = (id: number) => {
  return prisma.doctor.delete({
    where: { id },
  });
};
