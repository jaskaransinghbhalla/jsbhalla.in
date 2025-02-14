"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SignOutButton from "../buttons/signout-button";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const session = useSession();
  return (
    <div className="sticky top-0 backdrop-blur-sm z-50">
      <div className="px-4 lg:px-44 py-2 lg:py-4 flex justify-between items-center flex-wrap bg-stone-900">
        <div className="flex items-center text-white mr-6 lg:mr-72">
          <button
            className="text-xl lg:text-2xl hover:text-blue-400"
            onClick={() => router.push("/")}
          >
            Jaskaran Singh Bhalla
          </button>
        </div>
        <div className="block lg:hidden text-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm">
            <NavButton route="experience" text="Experience" />
            <NavButton route="projects" text="Projects" />
            <NavButton route="skills" text="Skills  " />
            <NavButton route="courses" text="Courses" />
            {/* <NavButton route="cv" text="Resume" /> */}
            {/* <NavButton route="watchlog" text="Watchlog" /> */}
            {session.status !== "authenticated" ? null : <SignOutButton />}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({ route, text }) {
  const router = useRouter();
  return (
    <button
      className="text-lg mx-2 block mt-2 lg:inline-block lg:mt-0 mr-4 text-white text-base hover:text-blue-400 px-2 py-1 rounded-xl"
      onClick={() => router.push(`/${route}`)}
    >
      {text}
    </button>
  );
}
