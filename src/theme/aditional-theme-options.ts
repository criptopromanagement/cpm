import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
    bigBalanceAmounts: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    link?: React.CSSProperties;
    bigBalanceAmounts?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
    bigBalanceAmounts: true;
  }
}

export const aditionalThemeOptions: ThemeOptions = {
  typography: {
    link: {
      textAlign: "center",
      cursor: "pointer",
      color: "#0F3",
      textDecoration: "underline",
    },
    bigBalanceAmounts: {
      fontSize: '2.5rem',
      fontWeight: "bold"
    }
  },
};
