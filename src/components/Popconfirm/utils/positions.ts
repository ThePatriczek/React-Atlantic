import { Dispatch, RefObject, SetStateAction } from "react";
import { Position } from "../../../types";
import { Dimensions } from "../style";

export const positionAnimationFromLeave: ReadonlyMap<
  Readonly<Position>,
  Readonly<string>
> = new Map([
  [`top`, `translateX(-50%) translateY(50px)`],
  [`bottom`, `translateX(-50%) translateY(-50px)`],
  [`right`, `translateX(-50px) translateY(-50%)`],
  [`left`, `translateX(50px) translateY(-50%)`]
]);

export const positionAnimationEnter: ReadonlyMap<
  Readonly<Position>,
  Readonly<string>
> = new Map([
  [`top`, `translateX(-50%) translateY(0)`],
  [`bottom`, `translateX(-50%) translateY(0)`],
  [`right`, `translateX(0) translateY(-50%)`],
  [`left`, `translateX(0) translateY(-50%)`]
]);

interface UpdateDimensionsProps {
  position: Position;
  togglerDimensions: [Dimensions, Dispatch<SetStateAction<Dimensions>>];
  insideContainerRef: RefObject<Readonly<HTMLDivElement>>;
  buttonContainerRef: RefObject<Readonly<HTMLSpanElement>>;
}

export const updateDimensions = ({
  position,
  togglerDimensions,
  insideContainerRef,
  buttonContainerRef
}: UpdateDimensionsProps) => {
  if (insideContainerRef?.current && buttonContainerRef?.current) {
    let topDimension;
    let rightDimension;

    if ([`top`, `bottom`].includes(position)) {
      rightDimension =
        buttonContainerRef?.current?.getBoundingClientRect().x! +
        buttonContainerRef?.current?.getBoundingClientRect().width! / 2;

      topDimension =
        buttonContainerRef?.current?.getBoundingClientRect().y! +
        (position === `top`
          ? -insideContainerRef?.current?.getBoundingClientRect().height!
          : position === `bottom`
          ? buttonContainerRef?.current?.getBoundingClientRect().height!
          : 0);
    } else if ([`left`, `right`].includes(position)) {
      rightDimension =
        buttonContainerRef?.current?.getBoundingClientRect().x! +
        buttonContainerRef?.current?.getBoundingClientRect().width!;

      topDimension =
        buttonContainerRef?.current.getBoundingClientRect().y! +
        buttonContainerRef?.current.getBoundingClientRect().height! / 2;
    }

    if (
      togglerDimensions[0].x !== Math.floor(rightDimension) ||
      togglerDimensions[0].y !== Math.floor(topDimension)
    ) {
      togglerDimensions[1]({
        x: Math.floor(rightDimension),
        y: Math.floor(topDimension)
      });
    }
  }
};
