import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from "@mui/x-date-pickers/DesktopDatePicker";

interface IProps extends DesktopDatePickerProps<any, any> {}

export default function MallDatePicker(props: IProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker inputFormat="MM/dd/yyyy" {...props} />
    </LocalizationProvider>
  );
}
