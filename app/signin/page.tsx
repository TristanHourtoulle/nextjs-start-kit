import { Button } from "@/components/ui/button";
import { providerMap, signIn } from "@/lib/auth";
import { auth } from "@/lib/auth-helper";
import { Github } from "lucide-react";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  const user = await auth();

  if (user) {
    redirect("/");
  }

  return (
    <section className="flex flex-col gap-2 items-center justify-center p-8 rounded-md border border-border mx-auto my-auto h-fit w-fit">
      <div className="flex flex-col gap-0 items-start mb-4">
        <h1 className="text-2xl text-primary font-semibold">
          Welcome on Kaiboard
        </h1>
        <p className="text-sm text-muted-foreground">
          The best tool to create meetings between people from severals
          timezone.
        </p>
      </div>
      <form
        className="w-full"
        key={providerMap[0].id}
        action={async () => {
          "use server";
          try {
            await signIn(providerMap[0].id, {
              redirectTo: props.searchParams?.callbackUrl ?? "",
            });
          } catch (error) {
            // Signin can fail for a number of reasons, such as the user
            // not existing, or the user not having the correct role.
            // In some cases, you may want to redirect to a custom error
            if (error instanceof AuthError) {
              console.error("Error signing in", error);
            }

            // Otherwise if a redirects happens Next.js can handle it
            // so you can just re-thrown the error and let Next.js handle it.
            // Docs:
            // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
            throw error;
          }
        }}
      >
        <Button variant={"default"} type="submit" className="w-full">
          <Github size={24} className="mr-2" />
          Sign in with {providerMap[0].name}
        </Button>
      </form>
    </section>
  );
}
