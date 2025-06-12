import { motion, Variants } from "framer-motion";
import BHoverCard from "../components/bauhaus/BHoverCard";
import { FiGlobe, FiServer, FiCpu } from "react-icons/fi";
import IconMarquee from "./IconMarquee";

interface SkillCardsProps {
  cardMotionConfig: Variants;
}
const SkillCards = ({ cardMotionConfig }: SkillCardsProps) => {
  return (
    <>
      <motion.div variants={cardMotionConfig}>
        <BHoverCard title="FULL STACK">
          <div className="relative text-b-white font-medium z-20">
            <p>Typescript, Python, C#</p>
            <p>React, Vue, .NET</p>
            <p>PostgreSQL, SQL Server</p>
          </div>
          <IconMarquee>
            <FiGlobe className="w-20 h-20 text-b-red -translate-x-10" />
          </IconMarquee>
        </BHoverCard>
      </motion.div>
      <motion.div variants={cardMotionConfig}>
        <BHoverCard title="INFRA.">
          <div className="relative text-b-white font-medium z-20">
            <p>Java, Rust</p>
            <p>Terraform, GoCD, CircleCI</p>
            <p>Docker, AWS, GCP</p>
          </div>
          <IconMarquee>
            <FiServer className="w-20 h-20 text-b-blue -translate-x-10" />
          </IconMarquee>
        </BHoverCard>
      </motion.div>
      <motion.div variants={cardMotionConfig}>
        <BHoverCard title="EMBEDDED">
          <div className="relative text-b-white font-medium z-20">
            <p>C, C++</p>
            <p>Unix, Zephyr RTOS</p>
            <p>NRF52840, STM32, Arduino</p>
          </div>
          <IconMarquee>
            <FiCpu className="w-20 h-20 text-b-yellow -translate-x-10" />
          </IconMarquee>
        </BHoverCard>
      </motion.div>
    </>
  );
};

export default SkillCards;
