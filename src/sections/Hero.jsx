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
      shortName: "V",
    },
    {
      name: "GTTC",
      url: "https://girijeshpaliwal.gt.tc/",
      shortName: "G",
    },
    {
      name: "Netlify",
      url: "https://girijeshpaliwal.netlify.app/",
      shortName: "N",
    },
    {
      name: "Firebase",
      url: "https://girijeshweb.web.app/",
      shortName: "F",
    },
    {
      name: "GitHub",
      url: "https://girijeshpaliwal.github.io/",
      shortName: "GH",
    },
  ];

  return (
    <section
      id="home"
      aria-label="Girijesh Paliwal - Mobile App Developer"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />

      <ParallaxBackground />

      {/* PREMIUM PORTFOLIO LAUNCHER */}
      <div className="absolute z-20 bottom-5 left-1/2 w-[92%] max-w-[720px] -translate-x-1/2 md:left-6 md:w-auto md:max-w-none md:translate-x-0">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 p-3 shadow-2xl backdrop-blur-xl">
          
          {/* subtle background glow */}
          <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

          {/* heading */}
          <div className="relative mb-3 flex items-center justify-between gap-4 px-1">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                Portfolio
              </p>

              <p className="mt-1 text-xs font-medium text-white/75">
                Explore on your preferred platform
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[10px] font-medium text-white/50">
                Live
              </span>
            </div>
          </div>

          {/* portfolio cards */}
          <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap">
            {portfolioLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.name} portfolio`}
                className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-xl"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-white/10 blur-2xl" />
                </div>

                <div className="relative flex items-center gap-2.5">
                  {/* platform avatar */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[10px] font-bold text-white/80 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.12]">
                    {item.shortName}
                  </div>

                  {/* text */}
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-white/90">
                      {item.name}
                    </p>

                    <p className="mt-0.5 truncate text-[9px] text-white/35 transition-colors duration-300 group-hover:text-white/55">
                      View portfolio
                    </p>
                  </div>

                  {/* arrow */}
                  <span className="ml-auto shrink-0 text-xs text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* bottom hint */}
          <div className="relative mt-2 hidden items-center gap-1.5 px-1 md:flex">
            <span className="text-[9px] text-white/25">
              Multiple deployments · Same portfolio experience
            </span>
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
