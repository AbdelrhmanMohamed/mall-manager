import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export function ArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      <svg width={400.004} height={400.004} style={{}} {...props}>
        <path d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0 0 12.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z" />
      </svg>
    </SvgIcon>
  );
}
