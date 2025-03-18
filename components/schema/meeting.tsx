import z from "zod";

export const meetingSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().optional(),
  start: z.date(),
  start_time: z.string(),
  location: z.string().optional(),
  teamId: z.string().optional(),
  timezone: z.string().optional(),
  duration: z.number().optional(),
});

export type MeetingSchema = typeof meetingSchema;
