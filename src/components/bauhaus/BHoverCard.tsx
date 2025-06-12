import { EasingDefinition, motion, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { useMousePosition } from "../../hooks";
import { clamp } from "../../utils";

const barVariants = {
  rest: { x: "-100%", transition: { duration: 0 } },
  hover: (i: number) => ({
    x: "100%",
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeInOut" as EasingDefinition,
    },
  }),
};

interface BHoverCardProps {
  title: string;
  children?: ReactNode;
}

const BHoverCard = ({ title, children }: BHoverCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();

  // initialize consts
  const rotateX = useSpring(0, { stiffness: 700, damping: 40 });
  const rotateY = useSpring(0, { stiffness: 700, damping: 40 });
  const translateX = useSpring(0, { stiffness: 700, damping: 40 });
  const translateY = useSpring(0, { stiffness: 700, damping: 40 });

  // ugly but i guess this is how we have to do it
  const isHovering = useRef(false);

  // collapse this!
  useEffect(() => {
    if (!ref.current || !isHovering.current) return;

    // element location and dims
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // calc how far the mouse is
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // do the math
    const rotateMax = 15;
    const translateMax = 50;
    const percentX = deltaX / (rect.width / 2);
    const percentY = deltaY / (rect.height / 2);

    // activate
    rotateY.set(clamp(percentX * rotateMax, rotateMax));
    rotateX.set(clamp(-percentY * rotateMax, rotateMax));
    translateX.set(clamp(percentX * translateMax, rotateMax));
    translateY.set(clamp(percentY * translateMax, rotateMax));
  }, [mouseX, mouseY]);
  const barColors = ["bg-b-yellow", "bg-b-red", "bg-b-blue"]; // your palette
  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative overflow-hidden w-64 h-48 bg-b-black p-4"
      style={{
        rotateX,
        rotateY,
        translateX,
        translateY,
        transformPerspective: 600,
      }}
      onHoverStart={() => {
        isHovering.current = true;
      }}
      onHoverEnd={() => {
        isHovering.current = false;
        rotateX.set(0);
        rotateY.set(0);
        translateX.set(0);
        translateY.set(0);
      }}
    >
      {/* BARS */}
      {barColors.map((color, i) => (
        <motion.div
          key={i}
          className={`absolute z-10 top-0 left-0 w-full h-full ${color} pointer-events-none`}
          variants={barVariants}
          custom={i}
          style={{ zIndex: 1 }}
        />
      ))}
      {/* CONTENT */}
      <h4 className="relative text-b-white text-3xl font-bold mb-2 z-20">
        {title}
      </h4>
      {children}
    </motion.div>
  );
};
export default BHoverCard;
