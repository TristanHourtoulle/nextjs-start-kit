"use client";

import { createMeeting } from "./meeting-action";
import { utcTimezones } from "@/components/json/timezone";
import { meetingSchema } from "@/components/schema/meeting";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, RefreshCcw } from "lucide-react";
import { User } from "next-auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Validation schema for all form inputs
const formSchema = meetingSchema;

export type HeadingProps = {
  user: User;
};

export const Heading = ({ user }: HeadingProps) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      start: new Date(),
      start_time: "",
      duration: 30,
      location: "",
      teamId: "",
      timezone: "utc+0",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await createMeeting(data, user);
      if (!response) {
        throw new Error("Failed to create meeting");
      }
      console.log("Meeting created successfully", response);
    } catch (error: any) {
      console.error("Failed to create meeting", error);
    }
  };

  useEffect(() => {
    const subscription = form.watch((value) => {
      const { title, start, start_time } = value;
      setIsFormValid(!!title && !!start && !!start_time);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-xl font-semibold">Bonjour {user.name},</h1>
        <p className="text-md text-muted-foreground">
          Voici tes réunions personnelles
        </p>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button variant="outline" className="group">
          <RefreshCcw
            size={16}
            className="mr-2 group-hover:rotate-90 transition-all"
          />
          Refresh
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Create meeting</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogTitle>Create a new meeting</DialogTitle>
            <DialogDescription>
              Fill the form below to create a new meeting. you can invite
              participants by adding their email addresses.
            </DialogDescription>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-3 py-4"
              >
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Meeting title"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <section className="w-full flex items-center justify-between gap-2">
                  {/* Date Input */}
                  <FormField
                    control={form.control}
                    name="start"
                    render={({ field }: { field: any }) => (
                      <FormItem className="w-full">
                        <FormLabel>Start Date and Time</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl className="w-full">
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Time */}
                  <FormField
                    control={form.control}
                    name="start_time"
                    render={({ field }: { field: any }) => (
                      <FormItem className="w-full max-w-[100px]">
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            className="text-center"
                            placeholder="Select a time"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timezone"
                    render={({ field }: { field: any }) => (
                      <FormItem className="w-full max-w-[100px]">
                        <FormLabel>Timezone</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="utc+0" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Negative UTC</SelectLabel>
                                {Object.entries(utcTimezones)
                                  .filter(([key, value]) => value.offset < 0)
                                  .map(([key, value]) => (
                                    <SelectItem key={key} value={key}>
                                      {value.name}
                                    </SelectItem>
                                  ))}
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Positive UTC</SelectLabel>
                                {Object.entries(utcTimezones)
                                  .filter(([key, value]) => value.offset >= 0)
                                  .map(([key, value]) => (
                                    <SelectItem key={key} value={key}>
                                      {value.name}
                                    </SelectItem>
                                  ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Duration */}
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }: { field: any }) => (
                      <FormItem className="w-full max-w-[150px]">
                        <FormLabel>Duration (in minutes)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Duration"
                            className="text-center"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </section>

                <DialogClose>
                  <Button
                    disabled={!isFormValid}
                    type="submit"
                    className="w-full mt-4"
                  >
                    Create meeting
                  </Button>
                </DialogClose>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
