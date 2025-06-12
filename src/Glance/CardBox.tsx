import { ReactNode } from "react";
import { motion } from "framer-motion";

const cardMotion = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

interface CardBoxProps {
  children: ReactNode;
}

const CardBox = ({ children }: CardBoxProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 1 }}
      variants={cardMotion}
      className="grid gap-5 pl-10 mb-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-max"
    >
      {children}
    </motion.div>
  );
};

export default CardBox;
