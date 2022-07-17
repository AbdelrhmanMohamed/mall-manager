// ----------------------------------------------------------------------

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          root: {
            background: [`rgba(7, 8, 10, 0.6)`],
            "&.MuiBackdrop-invisible": {},
          },
          "&.MuiBackdrop-invisible": {
            background: "transparent",
          },
        },
      },
    },
  };
}
