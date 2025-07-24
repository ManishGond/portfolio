import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 30 });

  const redCorals = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const redCorals2 = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mushroomYellow = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "10%"]);

  return (
    <section className="absolute inset-0 bg-black/10">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Underwater */}
        <div
          className="absolute inset-0 w-full h-screen -z-1"
          style={{
            backgroundImage: "url(/assets/layers/UW6.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Red Corals */}
        <motion.div
          className="absolute inset-0 -z-4"
          style={{
            backgroundImage: "url(/assets/layers/UW5.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: redCorals,
          }}
        />

        {/* Red Corals on Right */}
        <motion.div
          className="absolute inset-0 -z-3"
          style={{
            backgroundImage: "url(/assets/layers/UW4.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: redCorals2,
          }}
        />

        {/* Mushroom Yellow */}
        <motion.div
          className="absolute inset-0 -z-2"
          style={{
            backgroundImage: "url(/assets/layers/UW3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mushroomYellow,
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-1"
          style={{
            backgroundImage: "url(/assets/layers/UW2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
        <motion.div
          className="absolute inset-0 -z"
          style={{
            backgroundImage: "url(/assets/layers/UW1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mushroomYellow,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
