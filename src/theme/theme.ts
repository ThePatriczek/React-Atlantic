import { COLORS } from "./colors";
import { FONT_SIZE } from "./fontSize";

export const theme = {
  colors: {
    primary: COLORS.BLUE02,
    heading: COLORS.GREY09,
    appBackground: COLORS.GREY01,
    panelBackground: COLORS.WHITE,
    shadow: COLORS.GREY05
  },
  layout: {
    maxWidth: `1524px`
  },
  font: {
    size: {
      logo: FONT_SIZE.LOGO,
      large: FONT_SIZE.LARGE,
      normal: FONT_SIZE.NORMAL,
      small: FONT_SIZE.SMALL
    },
    colors: {
      table: COLORS.BLACK
    }
  }
};

export type Theme = typeof theme;
