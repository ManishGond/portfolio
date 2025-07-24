import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "mxnsmusic@gmail.com";

const CopyEmailBtn = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [copied]);

  return (
    <motion.button
      onClick={copyToClipboard}
      aria-label="Copy email address to clipboard"
      initial={false}
      animate={{
        width: copied ? "15rem" : "12rem",
        backgroundColor: "#000", // Example: Tailwind's bg-primary = indigo-600
        scale: copied ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight text-white transition-all ease-in-out cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "copied" : "not-copied"}
          className="flex items-center justify-center gap-2"
          aria-live="polite"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={copied ? "assets/copy-done.svg" : "assets/copy.svg"}
            className="w-5"
            alt="Copy Icon"
          />
          {copied ? "Email Address Copied!!" : "Copy Email Address"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailBtn;
