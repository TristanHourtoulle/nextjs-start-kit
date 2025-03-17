import { baseAuth } from "./auth";
import { redirect } from "next/navigation";

export const auth = async () => {
  const session = await baseAuth();

  return session?.user;
};

export const requiredAuth = async () => {
  const user = await auth();

  if (!user) {
    redirect("/unauthorized");
  }

  return user;
};
