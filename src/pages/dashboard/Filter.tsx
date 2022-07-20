import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MallDatePicker from "components/ui/MallDatePicker";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Filter() {
  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <Grid container spacing={2}>
      <Grid item>{today.toLocaleString(undefined, options)}</Grid>
      <Grid item sx={{}}>
        <Typography variant="h6">Reports are displayed</Typography>
      </Grid>
      <Grid item>
        <MallDatePicker
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField sx={DateInputStyle} size="small" {...params} />
          )}
          //   components={{
          //     OpenPickerIcon: DateIcon,
          //   }}
          label={""}
        />
      </Grid>
    </Grid>
  );
}

const DateInputStyle: SxProps<Theme> = {
  backgroundColor: (theme) => theme.palette.background.paper,
  borderRadius: 2,
  boxShadow: (theme) => theme.shadows[2],
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-root-MuiOutlinedInput-root": {
    "& .MuiInputAdornment-root": {
      "& .MuiButtonBase-root-MuiIconButton-root": {
        color: "red",
      },
    },
  },
};
