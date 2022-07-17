// ----------------------------------------------------------------------
import { alpha } from "@mui/material/styles";
export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[100],
          "&:hover": {
            backgroundColor: theme.palette.grey[500_16],
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "10.5px 14px 10.5px 12px !important",
        },
        notchedOutline: {
          borderColor: theme.palette.grey[300],
        },
        root: {
          backgroundColor: theme.palette.grey[200],
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&.Mui-focused": {
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${theme.palette.primary.light}`,
            },
          },
          "&.Mui-error": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.error.light,
            },
            "&.Mui-focused": {
              boxShadow: `0 0 0 2px ${alpha(theme.palette.error.main, 0.2)}`,
              "& .MuiOutlinedInput-notchedOutline": {
                border: `1px solid ${theme.palette.error.light}`,
              },
            },
          },
        },
        inputSizeSmall: {
          padding: "7.5px 8px 7.5px 12px",
        },
        inputMultiline: {
          padding: 0,
        },
      },
    },
  };
}
