import { motion } from "framer-motion";

import BIconButton from "../components/bauhaus/BIconButton";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const iconContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.5,
    },
  },
};

const iconElement = {
  hidden: { opacity: 0, y: -25 },
  show: { opacity: 1, transition: { duration: 0.5 }, y: 0 },
};

const SocialButtons = () => {
  return (
    <motion.div
      className="flex justify-center md:justify-end gap-x-4 md:mt-5 max-md:mb-5"
      variants={iconContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={iconElement}>
        <BIconButton color={"bg-b-black"} to="https://github.com/kenzoengineer">
          <FiGithub className="w-8 h-8" />
        </BIconButton>
      </motion.div>
      <motion.div variants={iconElement}>
        <BIconButton
          color={"bg-b-blue"}
          to="https://www.linkedin.com/in/ken-jiang"
        >
          <FiLinkedin className="w-8 h-8" />
        </BIconButton>
      </motion.div>
      <motion.div variants={iconElement}>
        <BIconButton
          color={"bg-b-yellow"}
          to="https://instagram.com/kenzoengineer"
        >
          <FiInstagram className="w-8 h-8" />
        </BIconButton>
      </motion.div>
      <motion.div variants={iconElement}>
        <BIconButton color={"bg-b-red"} to="mailto:kenzoengineer@gmail.com">
          <FiMail className="w-8 h-8" />
        </BIconButton>
      </motion.div>
    </motion.div>
  );
};

export default SocialButtons;
