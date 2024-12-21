"use client";
import { Preloader } from "@/components/PreLoader";
import { useEffect, useState } from "react";
import Contact from "../components/home/contact";
import FeaturedProjects from "../components/projects/feature-projects";
import Introduction from "../components/home/Introduction";
import Skills from "../components/home/skills";

export default function Home() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  if (load) {
    return <Preloader load={load} />;
  } else {
    return (
      <>
        <Introduction />
        {/* <Contact /> */}
      </>
    );
  }
}
