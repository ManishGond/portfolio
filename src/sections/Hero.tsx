import { Canvas, useFrame } from "@react-three/fiber"
import HeroText from "../components/hero/HeroText"
import ParallaxBackground from "../components/hero/ParallaxBackground"
import { Astronaut } from "../components/ui/models/Astronaut"
// import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { easing } from "maath"
import { Float } from "@react-three/drei"
import { Suspense } from "react"
import Loader from "../components/loader/Loader"

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const thinMobile = useMediaQuery({ maxWidth: 390 })
  const cameraZ = thinMobile ? 6 : isMobile ? 4.6 : 5
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 5] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={
                  thinMobile
                    ? 0.4
                    : isMobile
                      ? 0.26
                      : 0.5
                }
                position={
                  thinMobile
                    ? [0, -1, 0]
                    : isMobile
                      ? [0.5, -1.5, 0]
                      : [3, -1, 0]
                }
                rotation={
                  thinMobile
                    ? [-Math.PI / 100, 95, 195]
                    : isMobile
                      ? [-Math.PI / 100, 100, 200]
                      : [-Math.PI / 4, 100, 15.7]
                }
              />
            </Float>
          </Suspense>
          <Rig z={cameraZ} />
        </Canvas>
      </figure>


    </section>
  )
}

function Rig({ z }: { z: number }) {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, z], 0.5, delta)
  })
}

export default Hero