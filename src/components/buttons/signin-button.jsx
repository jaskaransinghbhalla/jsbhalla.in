"use client";
import { signIn } from "next-auth/react";

export default function SignInButton({ callbackUrl }) {
  const handleSignIn = async () => {
    await signIn("credentials", {
      callbackUrl: callbackUrl,
    });
  };
  return (
    <button
      className="bg-gray-800 text-white border rounded-xl p-2 my-8"
      onClick={handleSignIn}
    >
      Sign In
    </button>
  );
}
