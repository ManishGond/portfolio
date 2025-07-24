import { motion, AnimatePresence } from "framer-motion";

type AlertProps = {
  type: "success" | "danger";
  text: string;
};

const Alert = ({ type, text }: AlertProps) => {
  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.9 },
  };

  const colors = {
    success: {
      bg: "bg-green-600",
      badge: "bg-green-500",
      label: "Success",
    },
    danger: {
      bg: "bg-red-700",
      badge: "bg-red-500",
      label: "Error",
    },
  };

  const { bg, badge, label } = colors[type];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div
          className={`flex items-start gap-3 p-4 text-white rounded-lg shadow-lg ${bg}`}
        >
          <div className={`text-xs font-semibold uppercase px-2 py-1 rounded-full ${badge}`}>
            {label}
          </div>
          <p className="text-sm leading-snug max-w-[300px]">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
