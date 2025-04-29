import { selectRandom } from "../../utils";

const GLOBAL_SIZE = "h-[12rem] w-[12rem]";
const GLOBAL_SIZE_HALF = "h-[6rem] w-[6rem]";

const colors = [
  "bg-b-red",
  "bg-b-yellow",
  "bg-b-blue",
  "bg-b-white",
  "bg-b-black",
];
const colorsSansBlack = [
  "bg-b-red",
  "bg-b-yellow",
  "bg-b-blue",
  "bg-transparent",
];
const colorsSansWhite = ["bg-b-red", "bg-b-yellow", "bg-b-blue", "bg-b-black"];

const FULL_CIRCLE = `rounded-full ${GLOBAL_SIZE}`;
const directions = [
  FULL_CIRCLE,
  "rounded-br-full top-0",
  "rounded-tl-full bottom-0 right-0",
  "rounded-bl-full top-0 right-0",
  `rounded-tr-full bottom-0`,
];

const BMainTile = () => {
  const direction = selectRandom(directions);
  const bgColor = selectRandom(colorsSansBlack);
  const outerColor =
    direction === FULL_CIRCLE
      ? "bg-transparent"
      : selectRandom(bgColor === "bg-b-white" ? colorsSansWhite : colors);
  const innerColor = selectRandom(
    bgColor === "bg-b-white" ? colorsSansWhite : colors
  );
  return (
    // container (background)
    <div className={`relative z-10 ${GLOBAL_SIZE} ${bgColor} fadeIn`}>
      {/* outer shape */}
      <div
        className={`relative flex ${outerColor} ${GLOBAL_SIZE} ${direction}`}
      >
        {/* inner shape */}
        <div
          className={`absolute ${GLOBAL_SIZE_HALF} ${direction} ${innerColor}`}
        ></div>
      </div>
    </div>
  );
};

export default BMainTile;
