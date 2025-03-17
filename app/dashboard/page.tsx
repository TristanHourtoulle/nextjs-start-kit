import { requiredAuth } from "@/lib/auth-helper";

export default async function Dashboard() {
  await requiredAuth();

  return (
    <div>
      <p>Je ne peux voir cette page que si je suis connecté</p>
    </div>
  );
}
