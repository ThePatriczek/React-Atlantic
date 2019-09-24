export const theme = {
  color: {
    default: `#f2f2f2`,
    primary: `#1990ea`,
    success: `#7cb305`,
    info: `#1990ea`,
    warning: `#ffa500`,
    error: `#d9121a`,
    border: `#d9d9d9`
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
      sm: `10px`,
      md: `14px`,
      lg: `16px`
    },
    family: `-apple-system,BlinkMacSystemFont,‘Segoe UI’,‘PingFang SC’,‘Hiragino Sans GB’,‘Microsoft YaHei’,‘Helvetica Neue’,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’`
  },
  height: {
    sm: `26px`,
    md: `34px`,
    lg: `40px`
  }
};

export type Theme = typeof theme;
