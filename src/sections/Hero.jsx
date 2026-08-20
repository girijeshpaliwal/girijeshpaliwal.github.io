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
      image: "/portfolio/vercel.png",
      label: "Primary Deployment",
    },
    {
      name: "GTTC",
      url: "https://girijeshpaliwal.gt.tc/",
      image: "/portfolio/gttc.png",
      label: "Alternate Mirror",
    },
    {
      name: "Netlify",
      url: "https://girijeshpaliwal.netlify.app/",
      image: "/portfolio/netlify.png",
      label: "Netlify Deployment",
    },
    {
      name: "Firebase",
      url: "https://girijeshweb.web.app/",
      image: "/portfolio/firebase.png",
      label: "Firebase Hosting",
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

      {/* PORTFOLIO DEPLOYMENTS */}
      <div className="absolute z-20 bottom-4 left-1/2 w-[94%] max-w-[920px] -translate-x-1/2 md:bottom-6 md:left-6 md:w-auto md:max-w-[850px] md:translate-x-0">
        <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-black/30 p-3 shadow-2xl backdrop-blur-2xl md:p-4">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl" />

          {/* Header */}
          <div className="relative mb-3 flex items-center justify-between gap-4 px-1">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40 md:text-[10px]">
                  Live Portfolio
                </p>
              </div>

              <h3 className="text-sm font-semibold text-white md:text-base">
                Choose a deployment
              </h3>

              <p className="mt-0.5 text-[10px] text-white/40 md:text-xs">
                Same portfolio, available across multiple platforms
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[10px] font-medium text-white/50">
                Online
              </span>
            </div>
          </div>

          {/* Portfolio Cards */}
          <div className="relative grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {portfolioLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.name} portfolio`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-2xl"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
                  <img
                    src={item.image}
                    alt={`${item.name} portfolio preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-2 top-2">
                    <span className="rounded-full border border-white/15 bg-black/40 px-2 py-1 text-[8px] font-medium text-white/70 backdrop-blur-md">
                      LIVE
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/35 text-xs text-white/60 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-black">
                    ↗
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-2.5 md:p-3">
                  <div className="flex items-center gap-2">
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-xs font-semibold text-white md:text-sm">
                        {item.name}
                      </h4>

                      <p className="mt-0.5 truncate text-[8px] text-white/35 md:text-[9px]">
                        {item.label}
                      </p>
                    </div>

                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                  </div>

                  <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] pt-2">
                    <span className="text-[8px] font-medium text-white/30 md:text-[9px]">
                      Open website
                    </span>

                    <span className="text-[9px] text-white/30 transition-colors duration-300 group-hover:text-white/70">
                      View
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-white/[0.08] blur-3xl" />
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="relative mt-3 hidden items-center justify-between border-t border-white/[0.06] px-1 pt-3 md:flex">
            <p className="text-[9px] text-white/25">
              Select any deployment to explore the portfolio
            </p>

            <p className="text-[9px] text-white/25">
              4 active mirrors
            </p>
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
