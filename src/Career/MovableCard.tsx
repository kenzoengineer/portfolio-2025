import { motion, PanInfo, useAnimation, useMotionValue } from "framer-motion";
import { CardInfo } from "./Career";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

const calculateVerticalOffset = (idx: number, length: number) => {
  return Math.pow(idx - Math.floor(length / 2), 2) * 25;
};

const calculateRotation = (idx: number, length: number) => {
  return (idx - Math.floor(length / 2)) * 15;
};

const checkInside = (panEvent: PanInfo, dropRect: DOMRect | undefined) => {
  return (dropRect &&
    panEvent &&
    panEvent.point.x > dropRect.left &&
    panEvent.point.x < dropRect.right &&
    panEvent.point.y > dropRect.top &&
    panEvent.point.y < dropRect.bottom) as boolean;
};

const getDropZoneDelta = (
  cardRect: DOMRect | undefined,
  dropRect: DOMRect | undefined
) => {
  if (!dropRect || !cardRect) {
    return { x: 0, y: 0 };
  }

  const cardCenter = {
    x: cardRect.left + cardRect.width / 2,
    y: cardRect.top + cardRect.height / 2,
  };
  const dropCenter = {
    x: dropRect.left + dropRect.width / 2,
    y: dropRect.top + dropRect.height / 2,
  };

  return {
    x: dropCenter.x - cardCenter.x,
    y: dropCenter.y - cardCenter.y,
  };
};

interface MovableCardProps {
  dropZoneRef: React.RefObject<HTMLDivElement | null>;
  idx: number;
  cardInfo: CardInfo[];
  setHovering(v1: boolean): any;
}

const MovableCard = ({
  dropZoneRef,
  idx,
  cardInfo,
  setHovering,
}: MovableCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0 + calculateVerticalOffset(idx, cardInfo.length));
  const rotate = useMotionValue(0 + calculateRotation(idx, cardInfo.length));
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [cardRect, setCardRect] = useState<DOMRect | undefined>(undefined);
  const [dropRect, setDropRect] = useState<DOMRect | undefined>(undefined);
  useEffect(() => {
    setDropRect(dropZoneRef.current?.getBoundingClientRect());
  }, [dropZoneRef]);
  useEffect(() => {
    setCardRect(ref.current?.getBoundingClientRect());
  }, [ref]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{ x, y, rotate }}
      animate={controls}
      onDrag={(_, a) => {
        setHovering(checkInside(a, dropRect));
      }}
      onDragEnd={(_, a) => {
        if (checkInside(a, dropRect)) {
          const delta = getDropZoneDelta(cardRect, dropRect);
          controls.start({
            ...delta,
            rotate: 0,
            transition: { type: "spring", stiffness: 300 },
          });
        } else {
          controls.start({
            x: 0,
            y: 0 + calculateVerticalOffset(idx, cardInfo.length),
            rotate: calculateRotation(idx, cardInfo.length),
            transition: { type: "spring", stiffness: 300 },
          });
        }
      }}
      className="-mx-5"
      ref={ref}
    >
      <Card {...cardInfo[idx]} />
    </motion.div>
  );
};

export default MovableCard;
