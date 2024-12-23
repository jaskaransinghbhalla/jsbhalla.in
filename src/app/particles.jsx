"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  // #1c1917

  const options = useMemo(
    () => ({
      fpsLimit:60,
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#A8A29E",
          animation: {
            enable: true,
            speed: 20,
            sync: true,
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.6,
        },
        size: {
          value: 6,
          random: {
            enable: true,
            minimumValue: 3,
          },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 3,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 1,
          direction: "right",
          random: true,
          straight: true,
          out_mode: "out",
          warp: true,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          resize: true,
        },
      },
      retina_detect: true,
      background: {
        color: "#1c1917",
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        className="-z-50"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
