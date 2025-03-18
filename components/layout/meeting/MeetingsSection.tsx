"use client";

import { deleteMeeting, getMeetingsFromUser } from "@/app/meeting-action";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MeetingFilter } from "@/lib/types/meeting";
import { User } from "next-auth";
import { useEffect, useState } from "react";

export type MeetingsSectionProps = {
  user: User;
};

const useMeetings = (user: User) => {
  const [meetings, setMeetings] = useState<any[]>([]);

  const filterMeetingsFunction = (filter: string) => {
    if (filter === MeetingFilter["Upcoming meeting"]) {
      return meetings.filter((meeting) => meeting.start > new Date());
    } else if (filter === MeetingFilter["Past meeting"]) {
      return meetings.filter((meeting) => meeting.start < new Date());
    }
    return meetings;
  };

  useEffect(() => {
    const fetchMeetings = async () => {
      const userMeetings = await getMeetingsFromUser(user);
      setMeetings(userMeetings);
    };
    fetchMeetings();
  }, [user]);

  return { meetings, setMeetings, filterMeetingsFunction };
};

export const MeetingsSection = ({ user }: MeetingsSectionProps) => {
  const { meetings, setMeetings, filterMeetingsFunction } = useMeetings(user);
  const [filterMeeting, setFilterMeeting] = useState<string>(
    MeetingFilter["Upcoming meeting"]
  );

  const handleDelete = async (id: string) => {
    try {
      await deleteMeeting(id, user);
      setMeetings((prevMeetings) =>
        prevMeetings.filter((meeting) => meeting.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete meeting", error);
    }
  };

  const handleFilterChange = (filter: string) => {
    setFilterMeeting(filter);
    setMeetings(filterMeetingsFunction(filter));
  };

  return (
    <div className="flex flex-col items-start w-full gap-2 mt-4">
      <Select>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder={filterMeeting} />
        </SelectTrigger>
        <SelectContent>
          {Object.values(MeetingFilter).map((filter) => (
            <SelectItem
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className="w-full p-2 text-left"
              value={filter}
            >
              {filter}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <section className="mt-2 w-full flex items-center justify-start gap-4 flex-wrap">
        {meetings.length > 0 &&
          meetings.map((meeting) => (
            <div
              key={meeting.id}
              className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 gap-2 p-3 rounded-md border border-border"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-md font-semibold">{meeting.title}</p>
                <p className="text-md text-muted-foreground">
                  {meeting.start.toDateString()}
                </p>
              </div>
              <Button
                onClick={() => handleDelete(meeting.id)}
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          ))}
        {meetings.length === 0 && (
          <section className="mt-4 flex w-full items-center justify-center">
            <p className="text-md text-muted-foreground">No meetings found</p>
          </section>
        )}
      </section>
    </div>
  );
};
