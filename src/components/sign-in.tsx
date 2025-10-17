"use client";

import { authClient } from "@/server/auth/client";

export default function SignIn() {
  const { data: session } = authClient.useSession();

  const login = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  const logout = async () => {
    await authClient.signOut();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {session ? (
        <>
          <div className="btn-primary p-1">
            <div>Hello, {session.user.email}!</div>
            <button onClick={logout}>Logout</button>
          </div>
        </>
      ) : (
        <button onClick={login} className="btn-primary">
          Start Investing
        </button>
      )}
    </main>
  );
}
