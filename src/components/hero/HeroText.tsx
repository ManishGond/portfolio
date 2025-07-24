import { motion } from "motion/react";
import { FlipWords } from "../ui/Flipwords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hey!<br />I'm <span className="font-bold text-brand">Manish</span>

        </motion.h1>
        <motion.div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-400"
          >
            a developer<br />dedicated to crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              className="font-black text-white text-8xl"
              words={words}
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            website solutions
          </motion.p>
        </motion.div>
      </div>
      {/* Mobile View */}
      <div className="flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi, I'm <span className="font-bold text-brand">Manish</span>
        </motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-black text-neutral-300"
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
