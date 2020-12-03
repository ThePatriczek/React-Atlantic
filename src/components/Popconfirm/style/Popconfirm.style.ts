import { animated } from "react-spring/web.cjs";
import styled, { css } from "styled-components";
import { Position } from "../../../types";
import { StyledButton } from "../../Button/Button.style";

export interface Dimensions {
  x: number | undefined;
  y: number | undefined;
}

interface StyledPopconfirmProps {
  position?: Position;
  dimensions?: Dimensions;
}

const arrowSize = `18px`;

export const StyledAnimatedPopconfirmContainer = styled(animated.div)<
  StyledPopconfirmProps
>`
  box-sizing: border-box;
  position: fixed;
  z-index: 10;

  ${props =>
    props.dimensions && props.position === `left`
      ? css`
          top: ${props.dimensions.y}px;
          right: calc(${props.dimensions.x}px + ${arrowSize});
        `
      : props.dimensions && props.position === `right`
      ? css`
          top: ${props.dimensions.y}px;
          left: calc(${props.dimensions.x}px + ${arrowSize});
        `
      : props.dimensions && props.position === `top`
      ? css`
          top: calc(${props.dimensions.y}px - ${arrowSize});
          left: ${props.dimensions.x}px;
        `
      : props.dimensions &&
        props.position === `bottom` &&
        css`
          top: ${props.dimensions.y}px;
          left: ${props.dimensions.x}px;
        `}
`;

export const StyledAnimatedPopconfirmContent = styled.div<
  StyledPopconfirmProps
>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.theme.padding.md};
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.color.background.alpha};
  box-shadow: ${props => props.theme.boxShadow.md};

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 13px solid transparent;
  }

  ${props =>
    props.position === "left"
      ? css`
          &:after {
            top: 50%;
            left: calc(100% - 1px);
            margin-top: -13px;
            border-left-color: ${props.theme.color.background.alpha};
          }
        `
      : props.position === "right"
      ? css`
          &:after {
            top: 50%;
            right: calc(100% - 1px);
            margin-top: -13px;
            border-right-color: ${props.theme.color.background.alpha};
          }
        `
      : props.position === "top"
      ? css`
          &:after {
            top: calc(100% - 1px);
            left: 50%;
            margin-left: -13px;
            border-top-color: ${props.theme.color.background.alpha};
          }
        `
      : props.position === "bottom" &&
        css`
          &:after {
            bottom: calc(100% - 1px);
            left: 50%;
            margin-left: -13px;
            border-bottom-color: ${props.theme.color.background.alpha};
          }
        `}
`;

export const StyledPopconfirmTriangle = styled.div<StyledPopconfirmProps>`
  position: absolute;
  width: ${arrowSize};
  height: ${arrowSize};
  box-shadow: ${props => props.theme.boxShadow.md};
  transform: rotate(45deg);
  z-index: -1;

  ${props =>
    props.position === "left"
      ? css`
          top: calc(50% - ${parseInt(arrowSize, 0) / 2}px);
          right: -${parseInt(arrowSize, 0) / 2}px;
        `
      : props.position === "right"
      ? css`
          top: calc(50% - ${parseInt(arrowSize, 0) / 2}px);
          left: -${parseInt(arrowSize, 0) / 2}px;
        `
      : props.position === "top"
      ? css`
          left: calc(50% - ${parseInt(arrowSize, 0) / 2}px);
          bottom: -${parseInt(arrowSize, 0) / 2}px;
        `
      : props.position === "bottom" &&
        css`
          left: calc(50% - ${parseInt(arrowSize, 0) / 2}px);
          top: -${parseInt(arrowSize, 0) / 2}px;
        `}
`;

export const StyledPopconfirmFooter = styled.div<StyledPopconfirmProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-self: flex-end;

  ${StyledButton} {
    margin-right: ${props => props.theme.margin.sm};
  }
`;

export const StyledPopconfirmContent = styled.div<StyledPopconfirmProps>`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: ${props => props.theme.margin.sm};
`;

export const StyledPopconfirmContainer = styled.div<StyledPopconfirmProps>`
  position: relative;
  display: inline-block;
`;

export const StyledPopconfirmChildren = styled.span`
  display: inline-block;
`;
