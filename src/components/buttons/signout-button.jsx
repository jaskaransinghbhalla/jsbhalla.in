"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut("credentials", {
      callbackUrl: "/",
    });
  };
  return (
    <button
      className="bg-gray-900 hover:bg-gray-700 p-2 rounded text-white "
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
