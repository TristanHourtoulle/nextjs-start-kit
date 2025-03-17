import { signOut } from "@/lib/auth";
import { auth } from "@/lib/auth-helper";
import { Bell, LogOut, Settings, UserRound } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export async function AuthButton() {
  const user = await auth();

  if (!user) {
    return (
      <Link href="/signin" className={buttonVariants({ variant: "outline" })}>
        Sign in
      </Link>
    );
  }

  // return <Button>{user.email}</Button>;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hover:cursor-pointer hover:scale-105 transition-all">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage
              src={user.image ?? ""}
              alt={user.name ?? user.email ?? ""}
            />
            <AvatarFallback className="rounded-lg">
              {user.name?.[0] ?? "Guest"}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1">
        <DropdownMenuItem className="max-h-10 overflow-hidden">
          <Link href={"#"} className={buttonVariants({ variant: "ghost" })}>
            <UserRound />
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="max-h-10 overflow-hidden">
          <Link href={"#"} className={buttonVariants({ variant: "ghost" })}>
            <Bell />
            Notifications
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="max-h-10 overflow-hidden">
          <Link href={"#"} className={buttonVariants({ variant: "ghost" })}>
            <Settings />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="max-h-10 overflow-hidden">
          <form>
            <Button
              variant={"ghost"}
              className="w-full flex items-center justify-between"
              type="submit"
              formAction={async () => {
                "use server";
                await signOut();
                revalidatePath("/");
              }}
            >
              <LogOut size={16} className="mr-auto" />
              Sign out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
