// ----------------------------------------------------------------------

export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
        root: {
          ".MuiOutlinedInput-root": {
            // padding: 0,
          },
        },
      },
    },
  };
}
