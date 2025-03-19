import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Badge } from "../Badge";
import { deleteMeeting } from "@/app/meeting-action";
import { revalidatePath } from "next/cache";
import { User } from "next-auth";

export type MeetingCardProps = {
  meeting: any;
  user: User;
};

export const MeetingCard = ({ meeting, user }: MeetingCardProps) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteMeeting(id, user);
      revalidatePath("/");
    } catch (error) {
      console.error("Failed to delete meeting", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 rounded-md border border-border w-full max-w-[275px]">
      <div className="flex flex-col gap-1">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg font-semibold">{meeting.title}</h2>
          <Badge text={meeting.teams ? meeting.teams : "Solo"} />
        </div>
        <p className="text-sm text-muted-foreground">{meeting.description}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          Start: {new Date(meeting.start).toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">
          End: {new Date(meeting.end).toLocaleString()}
        </p>
      </div>
      <div className="flex gap-2 w-full mt-3">
        <Button
          onClick={() => handleDelete(meeting.id)}
          variant={"destructive"}
          size={"icon"}
          className="px-4"
        >
          <Trash size={16} />
        </Button>
        <Button variant={"outline"} className="w-full">
          Open
        </Button>
      </div>
    </div>
  );
};
