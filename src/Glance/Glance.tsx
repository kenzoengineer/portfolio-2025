import { AnimationGeneratorName } from "framer-motion";
import CardBox from "./CardBox";
import HobbyCards from "./HobbyCards";
import SkillCards from "./SkillCards";
import Timeline from "./Timeline";

interface GlanceTitleProps {
  text: string;
}
const GlanceTitle = ({ text }: GlanceTitleProps) => {
  return <h3 className="text-3xl font-bold mb-4">{text}</h3>;
};

const cardMotion = {
  hidden: { opacity: 0, scale: 0.5, rotateZ: 5 },
  show: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 0.4,
      scale: {
        type: "spring" as AnimationGeneratorName,
        visualDuration: 0.2,
        bounce: 0.5,
      },
    },
  },
};

const Glance = () => {
  return (
    <section className="flex items-center justify-center mt-20">
      <div className="w-[30rem] lg:w-[55rem] xl:w-[70rem]">
        <div className="bg-b-black text-b-white px-5 py-7">
          <h2 className="text-7xl">
            At a <span className="font-bold">glance</span>
          </h2>
        </div>
        <div className="bg-b-yellow text-b-black py-2 px-4 font-bold mb-10 w-max">
          <span className="font-black scale-105">Hover</span> over the cards!
        </div>
        <div className="flex gap-x-15">
          <div>
            <GlanceTitle text="I'm experienced in..." />
            <CardBox>
              <SkillCards cardMotionConfig={cardMotion} />
            </CardBox>
            <GlanceTitle text="In my spare time I enjoy..." />
            <CardBox>
              <HobbyCards cardMotionConfig={cardMotion} />
            </CardBox>
          </div>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default Glance;
