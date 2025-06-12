import { ReactNode } from "react";

interface IconMarqueeProps {
  children: ReactNode;
}
const IconMarquee = ({ children }: IconMarqueeProps) => {
  return (
    <div className="flex absolute overflow-visible gap-x-2 mt-2 z-0">
      {Array.from({ length: 4 }).map(() => children)}
    </div>
  );
};

export default IconMarquee;
