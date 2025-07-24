import { useRef } from "react";
import Card from "../components/Card";
import CopyEmailBtn from "../components/CopyEmailBtn";
import { FrameWork } from "../components/FrameWork";
import { useInView } from "react-intersection-observer";
import { Globe } from "../components/Globe";

const About = () => {
  const grid2Container = useRef<HTMLDivElement | null>(null);
  const [globeRef, globeInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid Items 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="image"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-2.5"
          />
          <div className="z-10">
            <p className="headtext">Hey! I am Manish Gond</p>
            <p className="subtext">
              Over the last few years, I have developed my frontend & backend
              developed projects and enhanced my skills to deliver dynamic and
              software and web applications
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid Items 2 */}
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center w-full h-full"
            ref={grid2Container}
          >
            <p className="flex items-end text-5xl text-gray-500 pointer-events-none">
              ART OF CODING
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "30%" }}
              image="assets/logos/typescript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "30%", left: "70%" }}
              text="Design Pattern"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "55%", left: "10%" }}
              image="assets/logos/vitejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "58%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "30%", left: "48%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "5%", left: "80%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "60%", left: "38%" }}
              image="assets/logos/sqlite.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/visualstudiocode.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "25%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "10%", left: "10%" }}
              image="assets/logos/azure.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid Items 3 */}
        <div className="grid-black-color grid-3" ref={globeRef}>
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Bengaluru, India and open to on-site working & hybrid
              mode worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            {!globeInView ? (
              <img src="/assets/blurred-globe.jpg" alt="loading globe" className="w-[300px] h-[300px] opacity-30" />
            ) : (
              <Globe className="top-28" paused={!globeInView} />
            )}
          </figure>
        </div>
        {/* Grid Items 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailBtn />
          </div>
        </div>
        {/* Grid Items 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWork />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
