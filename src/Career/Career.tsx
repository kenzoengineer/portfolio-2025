import { useRef, useState } from "react";
import { Color } from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import MovableCard from "./MovableCard";

export interface CardInfo {
  company: string;
  position: string;
  date: string;
  logo: string;
  color: Color;
}

const CARD_INFO: CardInfo[] = [
  {
    company: "Sentry",
    position: "Software Engineer",
    date: "Sept 2025 - Dec 2025",
    logo: "./company_logos/sentry.png",
    color: "red",
  },
  {
    company: "Vontive",
    position: "Software Engineer",
    date: "Sept 2025 - Dec 2025",
    logo: "./company_logos/vontive.png",
    color: "blue",
  },
  {
    company: "Senstar",
    position: "Software Engineer",
    date: "Sept 2025 - Dec 2025",
    logo: "./company_logos/senstar.png",
    color: "yellow",
  },
  {
    company: "Shoplogix",
    position: "Software Engineer",
    date: "Sept 2025 - Dec 2025",
    logo: "./company_logos/shoplogix.png",
    color: "red",
  },
  {
    company: "Qbuild",
    position: "Software Engineer",
    date: "Sept 2025 - Dec 2025",
    logo: "./company_logos/qbuild.png",
    color: "black",
  },
];

const CARD_EXTRA = [
  "here's some test stuff about sentry",
  "more test stuff about vontive",
  "and maybe some from senstar",
  "what about shoplogix? its here",
  "finally some qbuild writing here",
];

const Career = () => {
  const [placed, setPlaced] = useState(false);
  const [hovering, setHovering] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-b-black h-[120vh] flex justify-center pt-20">
      <div className="flex flex-col w-[30rem] lg:w-[55rem] xl:w-[70rem]">
        <div className="text-b-white text-7xl self-start mb-10">
          WORK <span className="font-bold">EXPERIENCE</span>
        </div>
        <div className="flex items-center mb-10">
          {/* drop zone */}
          <div
            className={`flex items-center justify-center h-[17rem] aspect-[5/7] bg-b-yellow rounded-lg transition-colors ${
              !placed && hovering !== -1 && "vibrate"
            }`}
            ref={ref}
          >
            <p className="text-2xl font-medium text-center">
              PLACE CARD <span className="font-black">HERE</span>
            </p>
          </div>
          {/* text zone */}
          <div className="h-96 border-b-white border-4 rounded-lg mx-10 flex-grow p-4 text-b-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={placed ? hovering : -1}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center h-full"
              >
                {(placed ? hovering : -1) === -1 ? (
                  <p className="text-6xl font-bold text-center rotate3d">???</p>
                ) : (
                  CARD_EXTRA[hovering]
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* hand */}
        <div className="flex self-center">
          {CARD_INFO.map((_, idx) => {
            return (
              <MovableCard
                idx={idx}
                cardInfo={CARD_INFO}
                dropZoneRef={ref}
                hovering={hovering}
                placed={placed}
                setPlaced={setPlaced}
                setHovering={setHovering}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
