import Image from "next/image";
import { AuthButton } from "../auth/auth-button";
import { ModeToggle } from "../theme/mode-toggle";
import { Badge } from "./Badge";

export default function Header() {
  return (
    <header className="w-full border-b border-accent">
      <div className="flex items-center justify-between gap-4 mx-auto w-full min-h-full max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-2">
        {/* App */}
        <div className="flex items-center gap-1 font-semibold">
          <Image src="/Logo 2.svg" alt="Kaiboard" width={46} height={46} />
          <p className="hidden lg:flex text-md mr-2">Kaiboard</p>
          <Badge text="v0.1.0" />
        </div>
        <div className="flex-1"></div>
        <ModeToggle />
        <AuthButton />
      </div>
    </header>
  );
}
