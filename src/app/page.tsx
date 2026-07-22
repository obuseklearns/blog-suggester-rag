import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/config";
import { SignInButton } from "./_components/SignInButton";
import { SignOutButton } from "./_components/SignOutButton";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-2xl border border-black/[.06] bg-white p-10 text-center shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
        {session ? (
          <>
            <Image
              src={session.user.image ?? "/next.svg"}
              alt={session.user.name}
              width={96}
              height={96}
              priority
              className="rounded-full ring-2 ring-black/[.06] dark:ring-white/[.12]"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
                {session.user.name}
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {session.user.email}
              </p>
            </div>
            <SignOutButton />
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
                Welcome
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Sign in to continue.
              </p>
            </div>
            <SignInButton />
          </>
        )}
      </main>
    </div>
  );
}
