export const theme = {
  color: {
    default: `#f2f2f2`,
    primary: `#1990ea`,
    success: `#7cb305`,
    info: `#1990ea`,
    warning: `#ffa500`,
    error: `#d9121a`,
    border: `#d9d9d9`,
    black: `#000`,
    white: `#fff`
  },
  padding: {
    xs: `2px`,
    sm: `5px`,
    md: `10px`,
    lg: `15px`,
    xl: `20px`
  },
  margin: {
    xs: `2px`,
    sm: `5px`,
    md: `10px`,
    lg: `15px`,
    xl: `20px`
  },
  radius: `4px`,
  rounded: `20px`,
  font: {
    size: {
      sm: `12px`,
      md: `14px`,
      lg: `16px`
    },
    family: `-apple-system,BlinkMacSystemFont,'Segoe UI'`
  },
  height: {
    xs: `16px`,
    sm: `26px`,
    md: `34px`,
    lg: `40px`
  },
  width: {
    xs: `16px`,
    sm: `26px`,
    md: `34px`,
    lg: `40px`
  },
  boxShadow: {
    sm: `0 0px 4px rgba(0,0,0,0.05)`
  }
};

export type Theme = typeof theme;
