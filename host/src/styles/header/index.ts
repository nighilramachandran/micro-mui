import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { HEADER_SPACINGS } from "../../utils/config";
import { HeaderStylesProps } from "../../interfaces";

// AppBar
export const appBarStyles: SxProps<Theme> = {
  position: "sticky",
  bgcolor: "background.default",
  borderRadius: 0,
  padding: 0,
};

// Toolbar
export const headerStyles: HeaderStylesProps = {
  height: {
    xs: HEADER_SPACINGS.H_MOBILE,
    md: HEADER_SPACINGS.H_MAIN_DESKTOP,
  },
  justifyContent: "center",
};
