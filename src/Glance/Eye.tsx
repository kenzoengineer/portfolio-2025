import { useEffect, useRef } from "react";
import { useMousePosition } from "../hooks";
import { motion, useSpring } from "framer-motion";
import { clamp } from "../utils";

const Eye = () => {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);
  let translateX = useSpring(0, { stiffness: 700, damping: 40 });
  let translateY = useSpring(0, { stiffness: 700, damping: 40 });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const dist = Math.hypot(deltaX, deltaY);
    const r = clamp(dist, 20);
    // compute vectors
    const ux = deltaX / (dist || 1);
    const uy = deltaY / (dist || 1);

    translateX.set(ux * r);
    translateY.set(uy * r);
  }, [mouseX, mouseY]);

  return (
    <div className="ml-5 mr-10 -mt-3">
      <div
        ref={ref}
        className="bg-b-white rounded-tl-full rounded-br-full h-24 w-24 rotate-45 relative p-7"
      >
        <motion.div
          style={{ translateX, translateY }}
          className="bg-b-black  rounded-full h-10 w-10 absolute -rotate-45"
        ></motion.div>
      </div>
    </div>
  );
};

export default Eye;
