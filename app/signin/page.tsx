import { Button } from "@/components/ui/button";
import { providerMap, signIn } from "@/lib/auth";
import { auth } from "@/lib/auth-helper";
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
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider: any) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
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
          <Button variant={"outline"} type="submit">
            <span>Sign in with {provider.name}</span>
          </Button>
        </form>
      ))}
    </div>
  );
}
