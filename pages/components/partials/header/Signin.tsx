import { signIn, signOut, useSession } from "next-auth/react";

export default function Signin() {
  const { data: session, status } = useSession();

  function handleAuth() {
    status === "authenticated" ? signOut() : signIn();
  }

  return (
    <p onClick={handleAuth} className="headerLink mx-4 font-semibold">
      {status === "authenticated" ? "sign out" : "sign in"}
    </p>
  );
}
