import { Dispatch, RefObject, SetStateAction } from "react";
import { Position } from "../../../types";

interface InViewportCheckProps {
  insideContainerRef: RefObject<Readonly<HTMLSpanElement>>;
  position: [Position, Dispatch<SetStateAction<Position>>];
}

export const inViewportCheck = ({
  insideContainerRef,
  position
}: InViewportCheckProps) => {
  const bounding = insideContainerRef?.current?.getBoundingClientRect();

  if (bounding) {
    const outLeft = bounding.left < 0;
    const outRight =
      bounding.right >
      (window.innerWidth || document.documentElement.clientWidth);
    const outTop = bounding.top < 0;
    const outBottom =
      bounding.bottom >
      (window.innerHeight || document.documentElement.clientHeight);
    const outOfAll = outTop && outBottom && outLeft && outRight;

    const outLeftRight = outLeft && bounding?.width > bounding?.right;
    const outRightLeft =
      outRight &&
      bounding.right >
        (window.innerWidth || document.documentElement.clientWidth);
    const outTopBottom = bounding?.height > bounding?.bottom;
    const outBottomTop =
      outBottom &&
      bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight);

    const move = (place: Position, withOut: boolean = false) => {
      if (position[0] !== place) {
        if (withOut) {
          if (outBottom) {
            position[1](place);
          }
        } else {
          position[1](place);
        }
      }
    };

    const moveTop = (withOut = false) => move("top", withOut);

    const moveBottom = (withOut = false) => move("bottom", withOut);

    const moveLeft = (withOut = false) => move("left", withOut);

    const moveRight = (withOut = false) => move("right", withOut);

    if (!outOfAll) {
      if (outLeftRight || outRightLeft) {
        if (!outTopBottom) {
          moveTop();
        } else if (!outBottomTop) {
          moveBottom();
        }
      } else {
        moveLeft(true);
        moveRight(true);
        moveBottom(true);
        moveTop(true);
      }
    }
  }
};
