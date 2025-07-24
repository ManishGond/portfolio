import { OrbitingCircles } from "./OrbitingCircles";

type IconProps = {
  src: string;
};

export function FrameWork() {
  const skills = [
    "auth0",
    "azure",
    "css3",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "threejs",
    "visualstudiocode",
    "vitejs",
  ]
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (<Icon key={index} src={`assets/logos/${skill}.svg`} />))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={25}
        radius={100}
        reverse
        speed={2}
      >
        {skills.reverse().map((skill, index) => (<Icon key={index} src={`assets/logos/${skill}.svg`} />))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }: IconProps) => (
  <img src={src} className="rounded-sm hover:scale-110 duration-200" />
);
