import BMainTile from "../components/bauhaus/BMainTile";

interface TileGridProps {
  rows: number;
  cols: number;
}

const TileGrid = ({ rows, cols }: TileGridProps) => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: rows }).map(() => {
        return (
          <div className="flex">
            {Array.from({ length: cols }).map(() => {
              return <BMainTile />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TileGrid;
