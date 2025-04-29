import { useContext, useMemo } from "react";
import { WindowContext } from "../App";
import TileGrid from "./TileGrid";
import TextPane from "./TextPane";

const MD_BREAKPOINT = 768;

const Hero = () => {
  const { windowWidth, windowHeight } = useContext(WindowContext);
  const [rows, cols] = useMemo(() => {
    if (windowWidth < MD_BREAKPOINT) {
      return [Math.ceil(windowHeight / 192) / 2, Math.ceil(windowWidth / 192)];
    }
    return [Math.ceil(windowHeight / 192), Math.ceil(windowWidth / 192) / 2];
  }, [windowWidth, windowHeight]);
  return (
    <div className="flex w-full h-screen justify-end md:justify-center items-center max-md:flex-col overflow-hidden">
      <div className="w-[42rem] flex flex-col md:pr-10">
        <TextPane />
        <p className="text-right italic text-red-400 mt-5">
          - icons will go here -
        </p>
      </div>
      <div className="overflow-hidden">
        <TileGrid rows={rows} cols={cols} />
      </div>
    </div>
  );
};

export default Hero;
