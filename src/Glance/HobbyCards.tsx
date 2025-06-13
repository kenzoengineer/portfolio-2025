import { PiMagicWand, PiPalette } from "react-icons/pi";
import { LuFish } from "react-icons/lu";
import BHoverCard from "../components/bauhaus/BHoverCard";
import IconMarquee from "./IconMarquee";
import { motion, Variants } from "framer-motion";

interface HobbyCardsProps {
  cardMotionConfig: Variants;
}
const HobbyCards = ({ cardMotionConfig }: HobbyCardsProps) => {
  return (
    <>
      <motion.div variants={cardMotionConfig}>
        <BHoverCard
          title="FINAL FANTASY XIV"
          cta="https://www.fflogs.com/character/id/15363888"
        >
          <IconMarquee>
            <PiMagicWand className="w-20 h-20 text-b-yellow -translate-x-10" />
          </IconMarquee>
        </BHoverCard>
      </motion.div>
      <motion.div variants={cardMotionConfig}>
        <BHoverCard
          title="DRAWING + DESIGN"
          cta="https://www.artstation.com/kenzoengineer"
        >
          <IconMarquee>
            <PiPalette className="w-20 h-20 text-b-red -translate-x-10" />
          </IconMarquee>
        </BHoverCard>
      </motion.div>
      <motion.div variants={cardMotionConfig}>
        <BHoverCard
          title="THE DAILY FISHDLE :D"
          cta="https://tacklevillage.com/fishdle-game/"
        >
          <IconMarquee>
            <LuFish className="w-20 h-20 text-b-blue -translate-x-10" />
          </IconMarquee>
        </BHoverCard>
      </motion.div>
    </>
  );
};

export default HobbyCards;
