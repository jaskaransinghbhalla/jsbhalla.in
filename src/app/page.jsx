"use client";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <div className="h-32 max-h-full md:max-h-screen">
        <div className="flex flex-col h-screen justify-between">
          <div className="mx-8 mb-8 lg:mx-48 lg:mb-1">
            <Introduction />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
