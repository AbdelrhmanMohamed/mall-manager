import React from "react";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";

export default function Logo() {
  return (
    <>
      <LanguageIcon fontSize="large" sx={{ display: { md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { md: "none", lg: "flex", sm: "flex", xs: "none" },
          color: "inherit",
          textDecoration: "none",
        }}
      >
        المنصة الموحدة لعملاء المياه والصرف الصحي
      </Typography>
    </>
  );
}
