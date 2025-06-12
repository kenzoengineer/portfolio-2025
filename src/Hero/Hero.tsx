import TileGrid from "./TileGrid";
import TextPane from "./TextPane";
import SocialButtons from "./SocialButtons";

const Hero = () => {
  return (
    <div className="flex w-full h-screen justify-end md:justify-center items-center max-md:flex-col overflow-hidden">
      <div className="w-[42rem] flex flex-col md:pr-10">
        <TextPane />
        <SocialButtons />
      </div>
      <div className="max-md:hidden overflow-hidden">
        <TileGrid rows={5} cols={4} />
      </div>
      <div className="md:hidden overflow-hidden">
        <TileGrid rows={2} cols={5} />
      </div>
    </div>
  );
};

export default Hero;
