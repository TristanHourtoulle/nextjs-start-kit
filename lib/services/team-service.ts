import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTeams = async () => {
  return await prisma.team.findMany();
};

export const getTeamById = async (id: string) => {
  return await prisma.team.findUnique({
    where: { id },
  });
};

export const createTeam = async (data: any) => {
  return await prisma.team.create({
    data,
  });
};

export const updateTeam = async (id: string, data: any) => {
  return await prisma.team.update({
    where: { id },
    data,
  });
};

export const deleteTeam = async (id: string) => {
  return await prisma.team.delete({
    where: { id },
  });
};
