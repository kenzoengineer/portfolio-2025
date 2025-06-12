import { EasingDefinition, motion } from "framer-motion";
import BMainTile from "../components/bauhaus/BMainTile";
import { selectRandom } from "../utils";

const slideInFrom = {
  top: { x: 0, y: -180 },
  bottom: { x: 0, y: 180 },
  left: { x: -180, y: 0 },
  right: { x: 180, y: 0 },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: (direction: keyof typeof slideInFrom) => ({
    opacity: 0,
    x: slideInFrom[direction].x,
    y: slideInFrom[direction].y,
  }),
  show: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" as EasingDefinition },
    x: 0,
    y: 0,
  },
};

interface TileGridProps {
  rows: number;
  cols: number;
}

const TileGrid = ({ rows, cols }: TileGridProps) => {
  return (
    <motion.div
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div className="flex" key={`row-${rowIdx}`}>
          {Array.from({ length: cols }).map((_, colIdx) => {
            const direction = selectRandom(["top", "bottom", "left", "right"]);

            return (
              <motion.div
                key={`tile-${rowIdx}-${colIdx}`}
                custom={direction}
                variants={tileVariants}
              >
                <BMainTile />
              </motion.div>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
};

export default TileGrid;
