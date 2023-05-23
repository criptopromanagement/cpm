import { styled } from "@mui/material/styles";

export const LayoutRoot = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: "100%",
    paddingTop: 64,
}));
