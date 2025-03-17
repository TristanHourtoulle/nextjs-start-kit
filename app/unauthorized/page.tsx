import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Unauthorized() {
  return (
    <div className="mx-auto w-full min-h-full max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <Alert>
        <AlertTitle>Unauthorized</AlertTitle>
        <AlertDescription>
          You are not authorized to view this page. Please sign in to continue.
        </AlertDescription>
      </Alert>
    </div>
  );
}
