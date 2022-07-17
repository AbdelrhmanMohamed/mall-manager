// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function InputLabel(theme) {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: theme.palette.text.primary,
          fontWeight: "bold",
        },
        asterisk: {
          color: "#ff1744",
        },
      },
    },
  };
}
