// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
            // border: `2px solid ${theme.palette.primary.main}`,
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          // boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          // boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          // boxShadow: theme.customShadows.secondary,
        },
        outlinedPrimary: {
          border: `2px solid ${theme.palette.primary.main}`,
          "&:hover": {
            border: `2px solid ${theme.palette.primary.main}`,
          },
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
