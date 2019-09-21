import * as React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { Theme } from './theme';

interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeProvider: React.FC<
  React.PropsWithChildren<ThemeProviderProps>
> = (props: React.PropsWithChildren<ThemeProviderProps>) => {
  const { theme, children } = props;

  return <Provider theme={theme}>{children as any}</Provider>;
};
