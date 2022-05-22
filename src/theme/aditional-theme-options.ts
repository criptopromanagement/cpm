import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    link?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
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
  },
};
