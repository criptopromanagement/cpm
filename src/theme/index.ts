import type { Direction, Theme } from '@mui/material';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { baseThemeOptions } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';


interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}
declare module '@mui/material/styles' {
  interface Palette {
    neutral?: Neutral;
  }

  interface PaletteOptions {
    neutral?: Neutral;
  }
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  mode: 'light' | 'dark';
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bigBalanceAmounts: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bigBalanceAmounts?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bigBalanceAmounts: true;
  }
}

const additionaltypographies = {
  typography: {
    bigBalanceAmounts: {
      fontSize: '2.5rem',
      fontWeight: "bold"
    }
  }
}
export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions,
    darkThemeOptions,
    additionaltypographies
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }
  return theme;
};
