import { signIn, signOut, useSession } from "next-auth/react";

export default function Signin() {
  const { data: session, status } = useSession();

  function handleAuth() {
    status === "authenticated" ? signOut() : signIn();
  }

  return (
    <p
      onClick={handleAuth}
      className="mx-4 cursor-pointer font-semibold text-mainBlackGray hover:text-mainGray"
    >
      {status === "authenticated" ? "sign out" : "sign in"}
    </p>
  );
}
