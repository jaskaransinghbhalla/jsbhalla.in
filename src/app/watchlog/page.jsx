"use client";
import { useSession, signIn } from "next-auth/react";
import MovieGrid from "@/components/watchlog/grid";

export default function Watchlog() {
  const { data: session } = useSession();
  const handleSignIn = async () => {
    await signIn("credentials", {
      callbackUrl: "/watchlog",
    });
  };

  if (session) {
    return (
      <div className="flex flex-col items-center mb-8">
        <div className=" w-full px-4 mt-5 flex">
          <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-900 pb-2 m-4">
            Watchlogs
          </h2>
        </div>
        <div className="flex flex-wrap px-4 lg:mb-4">
          <MovieGrid />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col m-8">
        <div className="text-xl"> Please Authenticate</div>
        <button
          className="bg-gray-800 text-white border rounded-xl p-2 my-8"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    );
  }
}
