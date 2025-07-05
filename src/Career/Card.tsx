export const colors_list = ["red", "yellow", "blue", "black"] as const;
export type Color = (typeof colors_list)[number];

const ColorMap = {
  red: {
    color: "text-b-red",
    filter:
      "brightness(0) saturate(100%) invert(35%) sepia(41%) saturate(2860%) hue-rotate(347deg) brightness(101%) contrast(89%)",
  },
  yellow: {
    color: "text-b-yellow",
    filter:
      "brightness(0) saturate(100%) invert(87%) sepia(68%) saturate(6472%) hue-rotate(334deg) brightness(99%) contrast(102%)",
  },
  blue: {
    color: "text-b-blue",
    filter:
      "brightness(0) saturate(100%) invert(30%) sepia(70%) saturate(1394%) hue-rotate(172deg) brightness(101%) contrast(107%)",
  },
  black: {
    color: "text-b-black",
    filter:
      "brightness(0) saturate(100%) invert(10%) sepia(8%) saturate(1617%) hue-rotate(261deg) brightness(91%) contrast(84%)",
  },
};

interface CornerProps {
  company: string;
  logo: string;
  color: Color;
  rotate?: boolean;
}
const Corner = ({ company, logo, color, rotate }: CornerProps) => {
  return (
    <div
      className={`flex flex-col items-center text-4xl font-bold w-5 ${
        rotate && "rotate-180"
      } ${ColorMap[color].color}`}
    >
      <p className="mb-1">{company[0]}</p>
      <img
        src={logo}
        style={{
          filter: ColorMap[color].filter,
        }}
      />
    </div>
  );
};

interface CardProps {
  company: string;
  date: string;
  position: string;
  logo: string;
  color: Color;
}

const Card = ({ company, date, position, logo, color }: CardProps) => {
  return (
    <div className="h-[20rem] aspect-[5/7] bg-b-white rounded-lg p-4 flex flex-col justify-between shadow-2xl">
      <div className="flex justify-start">
        <Corner company={company} logo={logo} color={color} />
      </div>
      <div className="mx-10">
        <img
          src={logo}
          className="pointer-events-none"
          style={{
            filter: ColorMap[color].filter,
          }}
        />
      </div>
      <div className="flex justify-end">
        <Corner company={company} logo={logo} color={color} rotate />
      </div>
    </div>
  );
};

export default Card;
