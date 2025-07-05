import { motion, PanInfo, useAnimation, useMotionValue } from "framer-motion";
import { CardInfo } from "./Career";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

const calculateVerticalOffset = (idx: number, length: number) => {
  return Math.pow(idx - Math.floor(length / 2), 2) * 20;
};

const calculateRotation = (idx: number, length: number) => {
  return (idx - Math.floor(length / 2)) * 15;
};

const isOverlapping = (cardRect: DOMRect, dropRect: DOMRect) => {
  return (
    cardRect.left < dropRect.right &&
    cardRect.right > dropRect.left &&
    cardRect.top < dropRect.bottom &&
    cardRect.bottom > dropRect.top
  );
};

const handleDragEnd = (
  dropZoneRef: React.RefObject<HTMLDivElement | null>,
  cardRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!dropZoneRef.current || !cardRef.current) return null;

  const dropRect = dropZoneRef.current.getBoundingClientRect();
  const cardRect = cardRef.current.getBoundingClientRect();

  if (isOverlapping(dropRect, cardRect)) {
    const snapX =
      dropRect.left - cardRect.left + (dropRect.width - cardRect.width) / 2;
    const snapY =
      dropRect.top - cardRect.top + (dropRect.height - cardRect.height) / 2;
    return {
      x: snapX,
      y: snapY,
    };
  }
  return null;
};

interface MovableCardProps {
  dropZoneRef: React.RefObject<HTMLDivElement | null>;
  idx: number;
  cardInfo: CardInfo[];
  placed: boolean;
  hovering: number;
  setPlaced(v1: boolean): any;
  setHovering(v1: number): any;
}

const MovableCard = ({
  dropZoneRef,
  idx,
  cardInfo,
  placed,
  hovering,
  setPlaced,
  setHovering,
}: MovableCardProps) => {
  const [dragging, setDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0 + calculateVerticalOffset(idx, cardInfo.length));
  const rotate = useMotionValue(0 + calculateRotation(idx, cardInfo.length));
  const cardControls = useAnimation();

  const cardRef = useRef<HTMLDivElement>(null);

  // evil useEffect to unplace current guy
  useEffect(() => {
    if (!placed && !dragging) {
      cardControls.start({
        x: 0,
        y: 0 + calculateVerticalOffset(idx, cardInfo.length),
        rotate: 0 + calculateRotation(idx, cardInfo.length),
      });
    }
  }, [placed]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{ x, y, rotate }}
      animate={cardControls}
      className="-mx-5 perspective-midrange cursor-grab"
      ref={cardRef}
      onDrag={() => {
        setPlaced(false);
        setDragging(true);
        if (
          dropZoneRef.current &&
          cardRef.current &&
          isOverlapping(
            cardRef.current.getBoundingClientRect(),
            dropZoneRef.current.getBoundingClientRect()
          )
        ) {
          setHovering(idx);
        } else {
          setHovering(-1);
        }
      }}
      onDragEnd={() => {
        setDragging(false);
        const dragEndResult = handleDragEnd(dropZoneRef, cardRef);
        if (dragEndResult === null) {
          cardControls.start({
            x: 0,
            y: 0 + calculateVerticalOffset(idx, cardInfo.length),
            rotate: 0 + calculateRotation(idx, cardInfo.length),
          });
          return;
        }
        const { x: dx, y: dy } = dragEndResult;
        cardControls.start({
          x: dx + x.get(),
          y: dy + y.get(),
          rotate: 0,
        });
        setPlaced(true);
      }}
    >
      {/* any filters */}
      <motion.div
        className={`overflow-hidden shadow-2xl ${
          !dragging && hovering === idx && "rotate3d"
        }`}
        // initial={false}
        // animate={{ height: !dragging && hovering === idx ? 0 : "auto" }}
        // transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Card {...cardInfo[idx]} />
      </motion.div>
    </motion.div>
  );
};

export default MovableCard;
