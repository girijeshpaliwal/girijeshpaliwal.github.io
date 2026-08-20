import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const portfolioLinks = [
    {
      name: "Vercel",
      url: "https://girijeshpaliwal.vercel.app/",
      label: "Primary",
      type: "vercel",
    },
    {
      name: "GTTC",
      url: "https://girijeshpaliwal.gt.tc/",
      label: "Mirror",
      type: "web",
    },
    {
      name: "Netlify",
      url: "https://girijeshpaliwal.netlify.app/",
      label: "Deployment",
      type: "netlify",
    },
    {
      name: "Firebase",
      url: "https://girijeshweb.web.app/",
      label: "Hosting",
      type: "firebase",
    },
  ];

  const renderPlatformIcon = (type) => {
    if (type === "vercel") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d="M12 3 22 21H2L12 3Z" />
        </svg>
      );
    }

    if (type === "netlify") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-none stroke-current"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M12 3v18M3 12h18" />
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    }

    if (type === "firebase") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d="m5 19 3-15 4 8 3-6 4 13-7 3-7-3Z" />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20" />
        <path d="M12 4c-2.2 2.2-3.4 5-3.4 8S9.8 17.8 12 20" />
      </svg>
    );
  };

  return (
    <section
      id="home"
      aria-label="Girijesh Paliwal - Mobile App Developer"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />

      <ParallaxBackground />

      {/* COMPACT PORTFOLIO SWITCHER */}
      <div className="absolute z-20 bottom-3 left-1/2 w-[94%] max-w-[760px] -translate-x-1/2 md:bottom-5 md:left-6 md:w-auto md:max-w-[720px] md:translate-x-0">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 px-3 py-2.5 shadow-xl backdrop-blur-xl md:px-4 md:py-3">

          {/* subtle glow */}
          <div className="pointer-events-none absolute -left-12 -top-12 h-24 w-24 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 right-0 h-24 w-24 rounded-full bg-white/[0.04] blur-3xl" />

          {/* header */}
          <div className="relative mb-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Portfolio
                </p>

                <p className="text-[10px] text-white/55 md:text-[11px]">
                  Available on multiple platforms
                </p>
              </div>
            </div>

            <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[8px] font-medium text-white/40 sm:block">
              4 Live
            </div>
          </div>

          {/* compact cards */}
          <div className="relative grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {portfolioLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.name} portfolio`}
                className="group flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-2.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-lg"
              >
                {/* ICON */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/75 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.12] group-hover:text-white">
                  {renderPlatformIcon(item.type)}
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-[11px] font-semibold text-white/90">
                      {item.name}
                    </p>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                  </div>

                  <p className="mt-0.5 truncate text-[8px] text-white/30">
                    {item.label}
                  </p>
                </div>

                {/* ARROW */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0 fill-none stroke-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:stroke-white/80"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
        aria-hidden="true"
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : undefined}
                position={isMobile ? [0, -1.5, 0] : undefined}
              />
            </Float>

            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });

  return null;
}

export default Hero;
