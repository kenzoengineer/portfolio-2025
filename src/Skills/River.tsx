import { EasingDefinition, motion, RepeatType } from "framer-motion";

const riverContainer = {
  hidden: {},
  show: {
    transition: {
      /* keep the same stagger so each column starts a bit later */
      staggerChildren: 0.4,
    },
  },
};

/**
 * One stripe-column is 96 px tall (h-40) and 20 px wide (w-20).
 * Five of them are stacked *vertically* inside each column, so the whole
 * column is 5 × 96 = 480 px tall.  We translate that stack downward and
 * loop it forever.
 */
const marqueeVariants = {
  hidden: {
    y: -160 * 4,
  },
  show: {
    y: [-160 * 4, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop" as RepeatType,
        duration: 5,
        ease: "linear" as EasingDefinition,
      },
    },
  },
};

interface RiverProps {
  className?: string;
  config?: number[];
}

const River = ({ className, config }: RiverProps) => {
  let c = config ?? [0, 1, 2, 3];
  if (!config || config.length !== 4) {
    c = [0, 1, 2, 3];
  }

  const components = [
    <motion.div
      variants={marqueeVariants}
      className="flex flex-col shrink-0 w-20"
    >
      <div className="bg-b-black  h-40 w-20 flex-none" />
      <div className="bg-b-blue   h-40 w-20 flex-none" />
      <div className="bg-b-red    h-40 w-20 flex-none" />
      <div className="bg-b-yellow h-40 w-20 flex-none" />
      <div className="bg-b-black  h-40 w-20 flex-none" />
    </motion.div>,
    <motion.div
      variants={marqueeVariants}
      className="flex flex-col shrink-0 w-20"
    >
      <div className="bg-b-blue   h-40 w-20 flex-none" />
      <div className="bg-b-red    h-40 w-20 flex-none" />
      <div className="bg-b-yellow h-40 w-20 flex-none" />
      <div className="bg-b-black  h-40 w-20 flex-none" />
      <div className="bg-b-blue   h-40 w-20 flex-none" />
    </motion.div>,
    <motion.div
      variants={marqueeVariants}
      className="flex flex-col shrink-0 w-20"
    >
      <div className="bg-b-red    h-40 w-20 flex-none" />
      <div className="bg-b-yellow h-40 w-20 flex-none" />
      <div className="bg-b-black  h-40 w-20 flex-none" />
      <div className="bg-b-blue   h-40 w-20 flex-none" />
      <div className="bg-b-red    h-40 w-20 flex-none" />
    </motion.div>,
    <motion.div
      variants={marqueeVariants}
      className="flex flex-col shrink-0 w-20"
    >
      <div className="bg-b-yellow h-40 w-20 flex-none" />
      <div className="bg-b-black  h-40 w-20 flex-none" />
      <div className="bg-b-blue   h-40 w-20 flex-none" />
      <div className="bg-b-red    h-40 w-20 flex-none" />
      <div className="bg-b-yellow h-40 w-20 flex-none" />
    </motion.div>,
  ];

  return (
    <div className={`${className}`}>
      <motion.div
        variants={riverContainer}
        initial="hidden"
        animate="show"
        /* 80 px wide (w-20 × 4 columns) × 96 px tall viewing window */
        className="w-[calc(80px * 4)] h-40 overflow-hidden relative flex"
      >
        {components[c[0]]}
        {components[c[1]]}
        {components[c[2]]}
        {components[c[3]]}
      </motion.div>
    </div>
  );
};

export default River;
