import PropTypes from "prop-types";
import { useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
//
// import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import palette from "./palette";
// import typography from "./typography";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 4 },
      // typography,
      shadows,
      customShadows,
    }),
    []
  );

  let theme = createTheme({ ...themeOptions, direction: "rtl" });
  theme.components = componentsOverride(theme);
  const cacheRtl = createCache({
    key: "mui",
    stylisPlugins: [prefixer],
    prepend: true,
  });
  theme = responsiveFontSizes(theme);
  return (
    <CacheProvider value={cacheRtl}>
      <MUIThemeProvider theme={theme} injectFirst>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
}
