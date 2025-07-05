import { BiLogoTypescript } from "react-icons/bi";
import { useState } from "react";
import River from "./River";
import { spring } from "framer-motion";

// -skew-x-[45deg] -rotate-135
const OLD_Skills = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative">
      <div
        className="w-10 h-5 relative z-30 pb-20"
        onClick={() => {
          setHovered(!hovered);
        }}
      >
        Click me
      </div>
      <div className="relative z-0">
        <River className="origin-bottom-right -skew-x-[-50deg] relative z-0" />
        <BiLogoTypescript
          className={`h-20 w-20 absolute z-10 text-b-white bg-b-black left-1/2 ${
            hovered && "-translate-y-36"
          }`}
          style={{
            transition: `${spring(0.5, 0.5)}`,
          }}
        />
        <BiLogoTypescript
          className={`h-20 w-20 absolute z-10 text-b-white bg-b-black left-1/2 ${
            hovered && "-translate-y-36"
          }`}
          style={{
            transition: `${spring(0.5, 0.5)}`,
          }}
        />
        <River
          className="origin-top-left -skew-x-[-50deg] relative z-20"
          config={[1, 2, 3, 0]}
        />
      </div>
    </div>
  );
};
export default OLD_Skills;
