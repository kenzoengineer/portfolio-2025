import { useRef, useState } from "react";
import { Color } from "./Card";
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

const Career = () => {
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-b-black h-screen flex flex-col items-center justify-center">
      {/* drop zone */}
      <div
        className={`h-[22rem] aspect-[5/7] border-2 border-b-white rounded-lg mb-10 ${
          hovering && "bg-b-red"
        }`}
        ref={ref}
      ></div>
      {/* hand */}
      <div className="flex">
        {CARD_INFO.map((_, idx) => {
          return (
            <MovableCard
              idx={idx}
              cardInfo={CARD_INFO}
              dropZoneRef={ref}
              setHovering={setHovering}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Career;
