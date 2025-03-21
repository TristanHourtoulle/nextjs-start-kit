import { MeetingsSection } from "@/components/layout/meeting/MeetingsSection";
import { auth } from "@/lib/auth-helper";
import { redirect } from "next/navigation";
import { Heading } from "./Heading";

export default async function Home() {
  const user = await auth();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="mx-auto w-full min-h-full max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <Heading user={user} />
      <MeetingsSection user={user} />
    </div>
  );
}
