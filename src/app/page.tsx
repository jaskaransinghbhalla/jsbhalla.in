'use client';

import { useState, useEffect } from 'react';
import { Preloader } from '@/components/PreLoader';
import Contact from '@/components/home/contact';
import FeaturedProjects from '@/components/projects/feature-projects';
import Introduction from '@/components/home/Introduction';
import Skills from '@/components/home/skills';
import ParticlesComponent from '@/app/particles';

export default function Home() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return <Preloader />;
  }

  return (
    <>
      <ParticlesComponent />
      <Introduction />
      <Skills />
      {/* <Contact /> */}
    </>
  );
}