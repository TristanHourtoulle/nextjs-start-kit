"use server";

import { prisma } from "@/lib/prisma";
import { User } from "next-auth";
import { revalidatePath } from "next/cache";

export const createMeeting = async (data: any, user: User) => {
  try {
    const meeting = await prisma.meeting.create({
      data: {
        title: data.title,
        start: data.start ? new Date(data.start) : new Date(),
        end: data.start ? new Date(data.start) : new Date(),
        userId: user.id ?? "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    await revalidatePath("/");
    return meeting;
  } catch (error) {
    console.error("Error creating meeting:", error);
    throw error;
  }
};

export const deleteMeeting = async (id: string, user: User) => {
  try {
    const meeting = await prisma.meeting.findUnique({
      where: { id },
    });
    if (!meeting) {
      throw new Error("Meeting not found");
    }
    if (meeting.userId !== user.id) {
      throw new Error("User not authorized to delete this meeting");
    }

    const deletedMeeting = await prisma.meeting.delete({
      where: { id },
    });
    await revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting meeting:", error);
    throw error;
  }
};

export const getMeetingsFromUser = async (user: User) => {
  try {
    const meetings = await prisma.meeting.findMany({
      where: {
        userId: user.id,
      },
    });
    if (!meetings || meetings.length === 0) {
      return [];
    }
    return meetings;
  } catch (error) {
    console.error("Error getting meetings:", error);
    throw error;
  }
};
