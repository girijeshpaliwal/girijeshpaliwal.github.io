import { OrbitingCircles } from "./OrbitingCircles";
import { assetPath } from "../constants";

export function Frameworks() {
  const skills = [
    "flutter",
    "android",
    "kotlin",
    "dart",
    "firebase",
    "react",
    "git",
    "laravel",
    "sqlite",
    "stripe",
    "tailwindcss",
    "javascript",
    "vitejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} name={skill} src={assetPath(`assets/logos/${skill}.svg`)} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} name={skill} src={assetPath(`assets/logos/${skill}.svg`)} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" alt={name ? `${name} tech icon` : "Tech Icon"} />
);
