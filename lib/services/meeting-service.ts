"use server";

import { MeetingSchema } from "@/components/schema/meeting";
import { PrismaClient } from "@prisma/client";
import { auth } from "../auth-helper";

const prisma = new PrismaClient();

// export const getAllMeetings = async () => {
//   return await prisma.meeting.findMany();
// };

// export const getMeetingById = async (id: string) => {
//   return await prisma.meeting.findUnique({
//     where: { id },
//   });
// };

export async function createMeeting(data: any) {
  if (!prisma) {
    throw new Error("Prisma client is undefined");
  }
  const user = await auth();
  if (!user) {
    throw new Error("User not authenticated");
  }
  if (!user.id) {
    throw new Error("User ID is undefined");
  }

  return await prisma.meeting.create({
    data: {
      title: data.title,
      start: data.start ? new Date(data.start) : new Date(),
      end: data.start ? new Date(data.start) : new Date(),
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}

// Get all mettings with user.id
export async function getAllMeetings() {
  const user = await auth();
  if (!user) {
    throw new Error("User not authenticated");
  }
  if (!user.id) {
    throw new Error("User ID is undefined");
  }
  return await prisma.meeting.findMany({
    where: {
      userId: user.id,
    },
  });
}

// export const createMeeting = async (data: any) => {
//   const user = await auth();
//   if (!user) {
//     throw new Error("User not authenticated");
//   }
//   if (!user.id) {
//     throw new Error("User ID is undefined");
//   }
//   return await prisma.meeting.create({
//     data: {
//       title: data.title,
//       start: new Date(data.start),
//       end: new Date(data.start),
//       userId: user.id,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//   });
// };

// export const updateMeeting = async (id: string, data: any) => {
//   return await prisma.meeting.update({
//     where: { id },
//     data,
//   });
// };

export const deleteMeeting = async (id: string) => {
  return await prisma.meeting.delete({
    where: { id },
  });
};
