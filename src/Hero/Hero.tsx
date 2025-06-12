import TileGrid from "./TileGrid";
import TextPane from "./TextPane";
import BIconButton from "../components/bauhaus/BIconButton";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex w-full h-screen justify-end md:justify-center items-center max-md:flex-col overflow-hidden">
      <div className="w-[42rem] flex flex-col md:pr-10">
        <TextPane />
        <div className="flex justify-center md:justify-end gap-x-4 md:mt-5 max-md:mb-5">
          <BIconButton
            color={"bg-b-black"}
            to="https://github.com/kenzoengineer"
          >
            <FiGithub className="w-8 h-8" />
          </BIconButton>
          <BIconButton
            color={"bg-b-blue"}
            to="https://www.linkedin.com/in/ken-jiang"
          >
            <FiLinkedin className="w-8 h-8" />
          </BIconButton>
          <BIconButton
            color={"bg-b-yellow"}
            to="https://instagram.com/kenzoengineer"
          >
            <FiInstagram className="w-8 h-8" />
          </BIconButton>
          <BIconButton color={"bg-b-red"} to="mailto:kenzoengineer@gmail.com">
            <FiMail className="w-8 h-8" />
          </BIconButton>
        </div>
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
