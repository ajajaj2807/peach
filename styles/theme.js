import React from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: '"Inter", "Helvetica", -apple-system,"Segoe UI"',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

export default theme;
