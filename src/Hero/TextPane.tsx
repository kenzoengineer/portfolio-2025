import { motion } from "framer-motion";

const textVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, transition: { duration: 0.4 }, x: 0 },
};

const TextPane = () => {
  return (
    <div className="flex items-center justify-center md:justify-end text-center md:text-right">
      <motion.div
        className="text-b-black"
        variants={textVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-8xl md:text-[8rem]/22 lg:text-[10rem]/30 font-medium md:mb-5"
          variants={textItem}
        >
          KEN
        </motion.h1>
        <motion.h1
          className="text-8xl/15 md:text-[10rem]/30 lg:text-[12rem]/35 font-black mb-5 md:mb-10"
          variants={textItem}
        >
          JIANG
        </motion.h1>
        <motion.h2 className="text-xl md:text-2xl" variants={textItem}>
          Incoming Software Engineer @ <b>Sentry</b>
        </motion.h2>
        <motion.h2
          className="text-xl md:text-2xl max-md:mb-5"
          variants={textItem}
        >
          Computer Engineering Alum @ <b>UWaterloo</b>
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default TextPane;
